import React, { useCallback, useState, useEffect } from "react";
import shopify, { authenticate } from "../shopify.server";
import { ButtonGroup, Page, TextField, Button } from "@shopify/polaris";
import { useLoaderData, useLocation, useNavigate } from "@remix-run/react";
import { json } from "@remix-run/node";

export async function loader({ request }) {
  // await authenticate.admin(request);
  const { admin } = await shopify.authenticate.admin(request);
  //api call to get customer details
  const response = await admin.graphql(
    `#graphql
      query {
        customers(first: 10) {
          edges {
            node {
              id
              phone
              displayName
              email
            }
          }
        }
      }`
  );
  //api call to get product details
  const response2 = await admin.graphql(`
    {
      products(first: 25) {
        nodes {
          title
          description
        }
      } 
    }`);
  //api call to fetch templates
  const fetchTemplate = (url, templateName) => {
    return fetch(url)
      .then((response) => response.text())
      .then((data) => {
        return { name: templateName, data: data };
      });
  };
  let templates = {};
  await Promise.all([
    fetchTemplate("http://localhost:8000/productshowcase", "product showcase"),
    fetchTemplate(
      "http://localhost:8000/salenotification",
      "sale notification"
    ),
    fetchTemplate(
      "http://localhost:8000/customeraddressing",
      "customer addressing"
    ),
  ])
    .then((results) => {
      results.forEach((result) => {
        templates[result.name] = result.data;
      });
    })
    .catch((error) => console.error("Error:", error));

  //destructuring responses
  const product_data = await response2.json();
  const { products } = product_data.data;
  const data = await response.json();
  const { customers } = data.data;
  const { edges: customer_data } = customers;
  const return_data = {
    customer_data: customer_data,
    product_data: products,
    templates: templates,
  };

  console.log("data has been fetched in loaders and it is", return_data);
  return json(return_data);
}
const getInitialValue = (choice, data) => {
  console.log("get initial value called with data", data);
  if (choice === "product-details") {
    return data.templates["product showcase"];
  }
  if (choice === "addressing") {
    return data.templates["customer addressing"];
  }
  if (choice === "discount-notification") {
    return data.templates["sale notification"];
  }
  return "";
};

const TemplateTextField = ({ initialTemplate, onUpdate }) => {
  console.log("re rendering text field component");
  const [template, setTemplate] = useState(initialTemplate);
  const handleTemplateChange = useCallback(
    (newValue) => {
      console.log(newValue, " is the new value of template");
      setTemplate(newValue);
    },
    [template]
  );

  return (
    <div>
      <TextField
        label="Template"
        value={template}
        onChange={handleTemplateChange}
        multiline={5}
        autoComplete="off"
      />
      <Button primary onClick={onUpdate}>
        Update template
      </Button>
    </div>
  );
};
const Template = () => {
  //add a use effect for choice
  const data = useLoaderData();
  console.log("trying to render Template component");
  const location = useLocation();
  const navigate = useNavigate();
  const { messageType: choice } = location.state || {};

  const [template, setTemplate] = React.useState(() =>
    getInitialValue(choice, data)
  );

  console.log("data inside component", data);
  const sendSMS = async () => {
    //write api call to send sms
    console.log("send sms called");
    //make a post request and send the template and the data object
    try {
      const response = await fetch("http://localhost:8000/sendSMS", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          template: template,
          data: data,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("data after sending sms", data);
    } catch (error) {
      console.error("An error occurred while sending the sms:", error);
    }
  };

  const updateTemplate = async (choice) => {
    //api call to update template in the database
    console.log("update template called");
    let tempname = "";
    if (choice === "product-details") {
      tempname = "Product Showcase";
    }
    if (choice === "addressing") {
      tempname = "General Addressing";
    }
    if (choice === "discount-notification") {
      tempname = "Sale Notification";
    }
    try {
      const response = await fetch("http://localhost:8000/updateTemplate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          templateName: tempname,
          template: template,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("data after updating template", data);
    } catch (error) {
      console.error("An error occurred while updating the template:", error);
    }
  };

  return (
    <Page>
      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          textAlign: "left",
          fontSize: "24px",
          fontWeight: "bold",
          padding: "20px 0",
        }}
      >
        Take a look at the following template and hit send and edit it if
        necessary.
      </h1>
      <h2
        style={{
          fontFamily: "Arial, sans-serif",
          textAlign: "left",
          fontSize: "18px",
          fontWeight: "bold",
          padding: "8px 0",
        }}
      >
        {"Use {{customer_name}} to address customer's by name"}
      </h2>
      <TemplateTextField
        initialTemplate={template}
        onUpdate={() => updateTemplate(choice)}
      />
      {/* <Button primary onClick={updateTemplate}>
        Update template
      </Button> */}
      <ButtonGroup>
        <Button primary onClick={sendSMS}>
          Send
        </Button>
        <Button onClick={navigate("/app/sms")}>Cancel</Button>
      </ButtonGroup>
    </Page>
  );
};

export default Template;
