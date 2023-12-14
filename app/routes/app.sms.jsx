import React from "react";
import { authenticate } from "../shopify.server";
import { ButtonGroup, Button, Page, MediaCard } from "@shopify/polaris";
import { useNavigate } from "@remix-run/react";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

const Sms = () => {
  const navigate = useNavigate();

  const handleButtonClick = (messageType) => {
    navigate("/app/template", { state: { messageType } });
  };

  return (
    <Page>
      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          padding: "20px 0",
        }}
      >
        Welcome to your SMS dashboard!
      </h1>

      <MediaCard
        title="Discount Notiication"
        primaryAction={{
          content: "Send now!",
          onAction: () => {
            handleButtonClick("discount-notification");
          },
        }}
        description="Send SMS to all your wonderful customers a notification regarding the sale/ discount coupons you have waiting for them at your store."
      >
        <img
          alt=""
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src="https://static.vecteezy.com/system/resources/thumbnails/014/066/812/small/discount-ribbon-banner-icon-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration-vector.jpg"
        />
      </MediaCard>
      <MediaCard
        title="Addressing your customers"
        primaryAction={{
          content: "Send now!",
          onAction: () => {
            handleButtonClick("addressing");
          },
        }}
        description="Send SMS to all your wonderful customers to address them personally and make them feel special."
      >
        <img
          alt=""
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src="https://img.freepik.com/premium-photo/customer-service-satisfaction-concept_254268-129.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697932800&semt=ais"
        />
      </MediaCard>
      <MediaCard
        title="Product details"
        primaryAction={{
          content: "Send now!",
          onAction: () => {
            handleButtonClick("product-details");
          },
        }}
        description="Send SMS to all your wonderful customers to let them know about your latest products."
      >
        <img
          alt=""
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src="data:image/jpeg;base64,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"
        />
      </MediaCard>
    </Page>
  );
};

export default Sms;
