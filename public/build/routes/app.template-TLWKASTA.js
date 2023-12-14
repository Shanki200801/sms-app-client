import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  init_esm,
  useLoaderData,
  useLocation,
  useNavigate
} from "/build/_shared/chunk-CVCDSR74.js";
import {
  Button,
  ButtonGroup,
  Page,
  TextField,
  init_esm as init_esm2
} from "/build/_shared/chunk-NQSUEL72.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-UARPE7NL.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.template.jsx
init_remix_hmr();
var import_react = __toESM(require_react());
var import_shopify = __toESM(require_shopify());
init_esm2();
init_esm();
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.template.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.template.jsx"
  );
  import.meta.hot.lastModified = "1702538272739.156";
}
var getInitialValue = (choice, data) => {
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
var TemplateTextField = ({
  initialTemplate,
  onUpdate
}) => {
  _s();
  console.log("re rendering text field component");
  const [template, setTemplate] = (0, import_react.useState)(initialTemplate);
  const handleTemplateChange = (0, import_react.useCallback)((newValue) => {
    console.log(newValue, " is the new value of template");
    setTemplate(newValue);
  }, [template]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Template", value: template, onChange: handleTemplateChange, multiline: 5, autoComplete: "off" }, void 0, false, {
      fileName: "app/routes/app.template.jsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { primary: true, onClick: onUpdate, children: "Update template" }, void 0, false, {
      fileName: "app/routes/app.template.jsx",
      lineNumber: 121,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.template.jsx",
    lineNumber: 119,
    columnNumber: 10
  }, this);
};
_s(TemplateTextField, "ZBcQqozCDATTvjTqu1klbZ8qlcc=");
_c = TemplateTextField;
var Template = () => {
  _s2();
  const data = useLoaderData();
  console.log("trying to render Template component");
  const location = useLocation();
  const navigate = useNavigate();
  const {
    messageType: choice
  } = location.state || {};
  const [template, setTemplate] = import_react.default.useState(() => getInitialValue(choice, data));
  console.log("data inside component", data);
  const sendSMS = async () => {
    console.log("send sms called");
    try {
      const response = await fetch("http://localhost:8000/sendSMS", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          template,
          data: data2
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data2 = await response.json();
      console.log("data after sending sms", data2);
    } catch (error) {
      console.error("An error occurred while sending the sms:", error);
    }
  };
  const updateTemplate = async (choice2) => {
    console.log("update template called");
    let tempname = "";
    if (choice2 === "product-details") {
      tempname = "Product Showcase";
    }
    if (choice2 === "addressing") {
      tempname = "General Addressing";
    }
    if (choice2 === "discount-notification") {
      tempname = "Sale Notification";
    }
    try {
      const response = await fetch("http://localhost:8000/updateTemplate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          templateName: tempname,
          template
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data2 = await response.json();
      console.log("data after updating template", data2);
    } catch (error) {
      console.error("An error occurred while updating the template:", error);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
      fontFamily: "Arial, sans-serif",
      textAlign: "left",
      fontSize: "24px",
      fontWeight: "bold",
      padding: "20px 0"
    }, children: "Take a look at the following template and hit send and edit it if necessary." }, void 0, false, {
      fileName: "app/routes/app.template.jsx",
      lineNumber: 198,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
      fontFamily: "Arial, sans-serif",
      textAlign: "left",
      fontSize: "18px",
      fontWeight: "bold",
      padding: "8px 0"
    }, children: "Use {{customer_name}} to address customer's by name" }, void 0, false, {
      fileName: "app/routes/app.template.jsx",
      lineNumber: 208,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TemplateTextField, { initialTemplate: template, onUpdate: () => updateTemplate(choice) }, void 0, false, {
      fileName: "app/routes/app.template.jsx",
      lineNumber: 217,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { primary: true, onClick: sendSMS, children: "Send" }, void 0, false, {
        fileName: "app/routes/app.template.jsx",
        lineNumber: 222,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: navigate("/app/sms"), children: "Cancel" }, void 0, false, {
        fileName: "app/routes/app.template.jsx",
        lineNumber: 225,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.template.jsx",
      lineNumber: 221,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.template.jsx",
    lineNumber: 197,
    columnNumber: 10
  }, this);
};
_s2(Template, "EAth0XPcpAgMrp3QUcl/5E4UTOw=", false, function() {
  return [useLoaderData, useLocation, useNavigate];
});
_c2 = Template;
var app_template_default = Template;
var _c;
var _c2;
$RefreshReg$(_c, "TemplateTextField");
$RefreshReg$(_c2, "Template");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  app_template_default as default
};
//# sourceMappingURL=/build/routes/app.template-TLWKASTA.js.map
