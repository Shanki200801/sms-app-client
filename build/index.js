var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server2 = require("react-dom/server"), import_react = require("@remix-run/react"), import_node2 = require("@remix-run/node"), import_isbot = __toESM(require("isbot"));

// app/shopify.server.js
var import_node = require("@shopify/shopify-app-remix/adapters/node"), import_server = require("@shopify/shopify-app-remix/server"), import_shopify_app_session_storage_prisma = require("@shopify/shopify-app-session-storage-prisma"), import__ = require("@shopify/shopify-api/rest/admin/2023-10");

// app/db.server.js
var import_client = require("@prisma/client"), prisma = global.prisma || new import_client.PrismaClient();
global.prisma || (global.prisma = new import_client.PrismaClient());
var db_server_default = prisma;

// app/shopify.server.js
var shopify2 = (0, import_server.shopifyApp)({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: import_server.LATEST_API_VERSION,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new import_shopify_app_session_storage_prisma.PrismaSessionStorage(db_server_default),
  distribution: import_server.AppDistribution.AppStore,
  restResources: import__.restResources,
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: import_server.DeliveryMethod.Http,
      callbackUrl: "/webhooks"
    }
  },
  hooks: {
    afterAuth: async ({ session }) => {
      shopify2.registerWebhooks({ session });
    }
  },
  future: {
    v3_webhookAdminContext: !0,
    v3_authenticatePublic: !0
  },
  ...process.env.SHOP_CUSTOM_DOMAIN ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] } : {}
}), shopify_server_default = shopify2;
var addDocumentResponseHeaders = shopify2.addDocumentResponseHeaders, authenticate = shopify2.authenticate, unauthenticated = shopify2.unauthenticated, login = shopify2.login, registerWebhooks = shopify2.registerWebhooks, sessionStorage = shopify2.sessionStorage;

// app/entry.server.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  addDocumentResponseHeaders(request, responseHeaders);
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server2.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 23,
          columnNumber: 7
        },
        this
      ),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough(), stream = (0, import_node2.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/app.additional.jsx
var app_additional_exports = {};
__export(app_additional_exports, {
  default: () => AdditionalPage
});
var import_polaris = require("@shopify/polaris"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function AdditionalPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ui-title-bar", { title: "Additional page" }, void 0, !1, {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.BlockStack, { gap: "300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Text, { as: "p", variant: "bodyMd", children: [
          "The app template comes with an additional page which demonstrates how to create multiple pages within app navigation using",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            import_polaris.Link,
            {
              url: "https://shopify.dev/docs/apps/tools/app-bridge",
              target: "_blank",
              removeUnderline: !0,
              children: "App Bridge"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.additional.jsx",
              lineNumber: 24,
              columnNumber: 17
            },
            this
          ),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 20,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Text, { as: "p", variant: "bodyMd", children: [
          "To create your own page and have it show up in the app navigation, add a page inside ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Code, { children: "app/routes" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 35,
            columnNumber: 47
          }, this),
          ", and a link to it in the ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Code, { children: "<ui-nav-menu>" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 36,
            columnNumber: 35
          }, this),
          " component found in ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Code, { children: "app/routes/app.jsx" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 37,
            columnNumber: 26
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 33,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 19,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.BlockStack, { gap: "200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Text, { as: "h2", variant: "headingMd", children: "Resources" }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_polaris.Link,
          {
            url: "https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav",
            target: "_blank",
            removeUnderline: !0,
            children: "App nav best practices"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 50,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 49,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 48,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.additional.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function Code({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_polaris.Box,
    {
      as: "span",
      padding: "025",
      paddingInlineStart: "100",
      paddingInlineEnd: "100",
      background: "bg-surface-active",
      borderWidth: "025",
      borderColor: "border",
      borderRadius: "100",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("code", { children }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 79,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 69,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app.template.jsx
var app_template_exports = {};
__export(app_template_exports, {
  default: () => app_template_default,
  loader: () => loader
});
var import_react3 = __toESM(require("react"));
var import_polaris2 = require("@shopify/polaris"), import_react4 = require("@remix-run/react"), import_node3 = require("@remix-run/node"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
async function loader({ request }) {
  let { admin } = await shopify_server_default.authenticate.admin(request), response = await admin.graphql(
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
  ), response2 = await admin.graphql(`
    {
      products(first: 25) {
        nodes {
          title
          description
        }
      } 
    }`), fetchTemplate = (url, templateName) => fetch(url).then((response3) => response3.text()).then((data2) => ({ name: templateName, data: data2 })), templates = {};
  await Promise.all([
    fetchTemplate("http://localhost:8000/productshowcase", "product showcase"),
    fetchTemplate(
      "http://localhost:8000/salenotification",
      "sale notification"
    ),
    fetchTemplate(
      "http://localhost:8000/customeraddressing",
      "customer addressing"
    )
  ]).then((results) => {
    results.forEach((result) => {
      templates[result.name] = result.data;
    });
  }).catch((error) => console.error("Error:", error));
  let product_data = await response2.json(), { products } = product_data.data, data = await response.json(), { customers } = data.data, { edges: customer_data } = customers, return_data = {
    customer_data,
    product_data: products,
    templates
  };
  return console.log("data has been fetched in loaders and it is", return_data), (0, import_node3.json)(return_data);
}
var getInitialValue = (choice, data) => (console.log("get initial value called with data", data), choice === "product-details" ? data.templates["product showcase"] : choice === "addressing" ? data.templates["customer addressing"] : choice === "discount-notification" ? data.templates["sale notification"] : ""), TemplateTextField = ({ initialTemplate, onUpdate }) => {
  console.log("re rendering text field component");
  let [template, setTemplate] = (0, import_react3.useState)(initialTemplate), handleTemplateChange = (0, import_react3.useCallback)(
    (newValue) => {
      console.log(newValue, " is the new value of template"), setTemplate(newValue);
    },
    [template]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_polaris2.TextField,
      {
        label: "Template",
        value: template,
        onChange: handleTemplateChange,
        multiline: 5,
        autoComplete: "off"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.template.jsx",
        lineNumber: 105,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Button, { primary: !0, onClick: onUpdate, children: "Update template" }, void 0, !1, {
      fileName: "app/routes/app.template.jsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.template.jsx",
    lineNumber: 104,
    columnNumber: 5
  }, this);
}, Template = () => {
  let data = (0, import_react4.useLoaderData)();
  console.log("trying to render Template component");
  let location = (0, import_react4.useLocation)(), navigate = (0, import_react4.useNavigate)(), { messageType: choice } = location.state || {}, [template, setTemplate] = import_react3.default.useState(
    () => getInitialValue(choice, data)
  );
  console.log("data inside component", data);
  let sendSMS = async () => {
    console.log("send sms called");
    try {
      let response = await fetch("http://localhost:8000/sendSMS", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          template,
          data: data2
        })
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      let data2 = await response.json();
      console.log("data after sending sms", data2);
    } catch (error) {
      console.error("An error occurred while sending the sms:", error);
    }
  }, updateTemplate = async (choice2) => {
    console.log("update template called");
    let tempname = "";
    choice2 === "product-details" && (tempname = "Product Showcase"), choice2 === "addressing" && (tempname = "General Addressing"), choice2 === "discount-notification" && (tempname = "Sale Notification");
    try {
      let response = await fetch("http://localhost:8000/updateTemplate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          templateName: tempname,
          template
        })
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      let data2 = await response.json();
      console.log("data after updating template", data2);
    } catch (error) {
      console.error("An error occurred while updating the template:", error);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "h1",
      {
        style: {
          fontFamily: "Arial, sans-serif",
          textAlign: "left",
          fontSize: "24px",
          fontWeight: "bold",
          padding: "20px 0"
        },
        children: "Take a look at the following template and hit send and edit it if necessary."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.template.jsx",
        lineNumber: 196,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "h2",
      {
        style: {
          fontFamily: "Arial, sans-serif",
          textAlign: "left",
          fontSize: "18px",
          fontWeight: "bold",
          padding: "8px 0"
        },
        children: "Use {{customer_name}} to address customer's by name"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.template.jsx",
        lineNumber: 208,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      TemplateTextField,
      {
        initialTemplate: template,
        onUpdate: () => updateTemplate(choice)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.template.jsx",
        lineNumber: 219,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.ButtonGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Button, { primary: !0, onClick: sendSMS, children: "Send" }, void 0, !1, {
        fileName: "app/routes/app.template.jsx",
        lineNumber: 227,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Button, { onClick: navigate("/app/sms"), children: "Cancel" }, void 0, !1, {
        fileName: "app/routes/app.template.jsx",
        lineNumber: 230,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.template.jsx",
      lineNumber: 226,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.template.jsx",
    lineNumber: 195,
    columnNumber: 5
  }, this);
}, app_template_default = Template;

// app/routes/app._index.jsx
var app_index_exports = {};
__export(app_index_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader2
});
var import_react5 = require("react"), import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_polaris3 = require("@shopify/polaris");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => (await authenticate.admin(request), null), action = async ({ request }) => {
  let { admin } = await authenticate.admin(request), color = ["Red", "Orange", "Yellow", "Green"][Math.floor(Math.random() * 4)], responseJson = await (await admin.graphql(
    `#graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        input: {
          title: `${color} Snowboard`,
          variants: [{ price: Math.random() * 100 }]
        }
      }
    }
  )).json();
  return (0, import_node4.json)({
    product: responseJson.data.productCreate.product
  });
};
function Index() {
  let nav = (0, import_react6.useNavigation)(), actionData = (0, import_react6.useActionData)(), submit = (0, import_react6.useSubmit)(), isLoading = ["loading", "submitting"].includes(nav.state) && nav.formMethod === "POST", productId = actionData?.product?.id.replace(
    "gid://shopify/Product/",
    ""
  );
  (0, import_react5.useEffect)(() => {
    productId && shopify.toast.show("Product created");
  }, [productId]);
  let generateProduct = () => submit({}, { replace: !0, method: "POST" });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ui-title-bar", { title: "Remix app template", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { variant: "primary", onClick: generateProduct, children: "Generate a product" }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 88,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { gap: "500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { gap: "500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { gap: "200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "h2", variant: "headingMd", children: "Congrats on creating a new Shopify app \u{1F389}" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 98,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { variant: "bodyMd", as: "p", children: [
            "This embedded app template uses",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_polaris3.Link,
              {
                url: "https://shopify.dev/docs/apps/tools/app-bridge",
                target: "_blank",
                removeUnderline: !0,
                children: "App Bridge"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 103,
                columnNumber: 21
              },
              this
            ),
            " ",
            "interface examples like an",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Link, { url: "/app/additional", removeUnderline: !0, children: "additional page in the app nav" }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 111,
              columnNumber: 21
            }, this),
            ", as well as an",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_polaris3.Link,
              {
                url: "https://shopify.dev/docs/api/admin-graphql",
                target: "_blank",
                removeUnderline: !0,
                children: "Admin GraphQL"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 115,
                columnNumber: 21
              },
              this
            ),
            " ",
            "mutation demo, to provide a starting point for app development."
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 101,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 97,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { gap: "200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "h3", variant: "headingMd", children: "Get started with products" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 127,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "p", variant: "bodyMd", children: [
            "Generate a product with GraphQL and get the JSON output for that product. Learn more about the",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_polaris3.Link,
              {
                url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate",
                target: "_blank",
                removeUnderline: !0,
                children: "productCreate"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 133,
                columnNumber: 21
              },
              this
            ),
            " ",
            "mutation in our API references."
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 130,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 126,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.InlineStack, { gap: "300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Button, { loading: isLoading, onClick: generateProduct, children: "Generate a product" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 144,
            columnNumber: 19
          }, this),
          actionData?.product && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_polaris3.Button,
            {
              url: `shopify:admin/products/${productId}`,
              target: "_blank",
              variant: "plain",
              children: "View product"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 148,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 143,
          columnNumber: 17
        }, this),
        actionData?.product && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_polaris3.Box,
          {
            padding: "400",
            background: "bg-surface-active",
            borderWidth: "025",
            borderRadius: "200",
            borderColor: "border",
            overflowX: "scroll",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("pre", { style: { margin: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("code", { children: JSON.stringify(actionData.product, null, 2) }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 167,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 166,
              columnNumber: 21
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 158,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 96,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 95,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { gap: "500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { gap: "200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "h2", variant: "headingMd", children: "App template specs" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 178,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { gap: "200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.InlineStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "span", variant: "bodyMd", children: "Framework" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 183,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_polaris3.Link,
                {
                  url: "https://remix.run",
                  target: "_blank",
                  removeUnderline: !0,
                  children: "Remix"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 186,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 182,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.InlineStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "span", variant: "bodyMd", children: "Database" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 195,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_polaris3.Link,
                {
                  url: "https://www.prisma.io/",
                  target: "_blank",
                  removeUnderline: !0,
                  children: "Prisma"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 198,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 194,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.InlineStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "span", variant: "bodyMd", children: "Interface" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 207,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.Link,
                  {
                    url: "https://polaris.shopify.com",
                    target: "_blank",
                    removeUnderline: !0,
                    children: "Polaris"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app._index.jsx",
                    lineNumber: 211,
                    columnNumber: 25
                  },
                  this
                ),
                ", ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.Link,
                  {
                    url: "https://shopify.dev/docs/apps/tools/app-bridge",
                    target: "_blank",
                    removeUnderline: !0,
                    children: "App Bridge"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app._index.jsx",
                    lineNumber: 219,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 210,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 206,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.InlineStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "span", variant: "bodyMd", children: "API" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 229,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_polaris3.Link,
                {
                  url: "https://shopify.dev/docs/api/admin-graphql",
                  target: "_blank",
                  removeUnderline: !0,
                  children: "GraphQL API"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 232,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 228,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 181,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 177,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 176,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { gap: "200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "h2", variant: "headingMd", children: "Next steps" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 245,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.List, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.List.Item, { children: [
              "Build an",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_polaris3.Link,
                {
                  url: "https://shopify.dev/docs/apps/getting-started/build-app-example",
                  target: "_blank",
                  removeUnderline: !0,
                  children: [
                    " ",
                    "example app"
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 251,
                  columnNumber: 23
                },
                this
              ),
              " ",
              "to get started"
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 249,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.List.Item, { children: [
              "Explore Shopify\u2019s API with",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_polaris3.Link,
                {
                  url: "https://shopify.dev/docs/apps/tools/graphiql-admin-api",
                  target: "_blank",
                  removeUnderline: !0,
                  children: "GraphiQL"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 263,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 261,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 248,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 244,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 243,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 175,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 174,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 93,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

// app/routes/auth.login/route.jsx
var route_exports = {};
__export(route_exports, {
  action: () => action2,
  default: () => Auth,
  links: () => links,
  loader: () => loader3
});
var import_react7 = require("react"), import_node5 = require("@remix-run/node"), import_polaris4 = require("@shopify/polaris"), import_react8 = require("@remix-run/react");

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default = "/build/_assets/styles-XBXYCZPP.css";

// app/routes/auth.login/error.server.jsx
var import_server3 = require("@shopify/shopify-app-remix/server");
function loginErrorMessage(loginErrors) {
  return loginErrors?.shop === import_server3.LoginErrorType.MissingShop ? { shop: "Please enter your shop domain to log in" } : loginErrors?.shop === import_server3.LoginErrorType.InvalidShop ? { shop: "Please enter a valid shop domain to log in" } : {};
}

// app/routes/auth.login/route.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }], loader3 = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node5.json)({
    errors,
    polarisTranslations: require("@shopify/polaris/locales/en.json")
  });
}, action2 = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node5.json)({
    errors
  });
};
function Auth() {
  let loaderData = (0, import_react8.useLoaderData)(), actionData = (0, import_react8.useActionData)(), [shop, setShop] = (0, import_react7.useState)(""), { errors } = actionData || loaderData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.AppProvider, { i18n: loaderData.polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { variant: "headingMd", as: "h2", children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 48,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_polaris4.TextField,
      {
        type: "text",
        name: "shop",
        label: "Shop domain",
        helpText: "example.myshopify.com",
        value: shop,
        onChange: setShop,
        autoComplete: "on",
        error: errors.shop
      },
      void 0,
      !1,
      {
        fileName: "app/routes/auth.login/route.jsx",
        lineNumber: 51,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Button, { submit: !0, children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 61,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 47,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 46,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 45,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/webhooks.jsx
var webhooks_exports = {};
__export(webhooks_exports, {
  action: () => action3
});
var action3 = async ({ request }) => {
  let { topic, shop, session, admin, payload } = await authenticate.webhook(
    request
  );
  if (!admin)
    throw new Response();
  switch (topic) {
    case "APP_UNINSTALLED":
      session && await db_server_default.session.deleteMany({ where: { shop } });
      break;
    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }
  throw new Response();
};

// app/routes/app.sms.jsx
var app_sms_exports = {};
__export(app_sms_exports, {
  default: () => app_sms_default,
  loader: () => loader4
});
var import_react9 = require("react");
var import_polaris5 = require("@shopify/polaris"), import_react10 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => (await authenticate.admin(request), null), Sms = () => {
  let navigate = (0, import_react10.useNavigate)(), handleButtonClick = (messageType) => {
    navigate("/app/template", { state: { messageType } });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "h1",
      {
        style: {
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          padding: "20px 0"
        },
        children: "Welcome to your SMS dashboard!"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.sms.jsx",
        lineNumber: 21,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_polaris5.MediaCard,
      {
        title: "Discount Notiication",
        primaryAction: {
          content: "Send now!",
          onAction: () => {
            handleButtonClick("discount-notification");
          }
        },
        description: "Send SMS to all your wonderful customers a notification regarding the sale/ discount coupons you have waiting for them at your store.",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "img",
          {
            alt: "",
            width: "100%",
            height: "100%",
            style: {
              objectFit: "cover",
              objectPosition: "center"
            },
            src: "https://static.vecteezy.com/system/resources/thumbnails/014/066/812/small/discount-ribbon-banner-icon-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration-vector.jpg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.sms.jsx",
            lineNumber: 43,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.sms.jsx",
        lineNumber: 33,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_polaris5.MediaCard,
      {
        title: "Addressing your customers",
        primaryAction: {
          content: "Send now!",
          onAction: () => {
            handleButtonClick("addressing");
          }
        },
        description: "Send SMS to all your wonderful customers to address them personally and make them feel special.",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "img",
          {
            alt: "",
            width: "100%",
            height: "100%",
            style: {
              objectFit: "cover",
              objectPosition: "center"
            },
            src: "https://img.freepik.com/premium-photo/customer-service-satisfaction-concept_254268-129.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697932800&semt=ais"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.sms.jsx",
            lineNumber: 64,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.sms.jsx",
        lineNumber: 54,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_polaris5.MediaCard,
      {
        title: "Product details",
        primaryAction: {
          content: "Send now!",
          onAction: () => {
            handleButtonClick("product-details");
          }
        },
        description: "Send SMS to all your wonderful customers to let them know about your latest products.",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "img",
          {
            alt: "",
            width: "100%",
            height: "100%",
            style: {
              objectFit: "cover",
              objectPosition: "center"
            },
            src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUEhcVFRQYFxcYFxoaGxsaGxsYFxoaGxcaGxcaGhobICwkGx0pHhcaJTglKS4wMzMzGiI5PjkxPSwzMzABCwsLEA4QHhISHTIpIikyNDQyMjAyMjIyMjIyMjIyMjAwMjIyMjIyMjIyMjIyMjIyMjIwMjIyMjIyMjIyMjIyMv/AABEIAJ0BQQMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAwQFBgECBwj/xABPEAACAAMFAgkIBQkFBwUAAAABAgADEQQFEiExQVEGEyIyYXGBkZIHFFJTobHB0RVCVOHwIzM1YnJ0k9LiJEOCs8IWY3OistPxNFWDpMP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAmEQEBAQEAAgMAAAUFAAAAAAAAARECITEDEkETIjJRYQQUgaHB/9oADAMBAAIRAxEAPwDrXnTerb2/KDzpvVt7flDqI6+r2lWWS02aeSMgBmzMeaijaT3AVJoATEUt503q29vyhneF6S0X8qyyhrV2C16BWlTHI754ST7TMMyY5RdERGIVVrzRpiO9iM+gUArlotGdBqdTtA+cTyrsNh4WSJ1rWzSQ0wlXZnphRQgGxqM1SQNNo12WGOQeTadxdonTzKmzFWUELS0MzBjfECyryyCJZ5oOmcdSu++LPPJEqcjsNVBpMXoaW1GU9BEVD6CkZpBFGKQYYzGYI1wxkCNhGwEBphjFIUpFe4W8IhY0VVAabMrhrzVA1dgNegZVoc8olXU7SCkcjtfDK0tlxrDqop/5QIYpwmng146Z42+cZadriPvvhAljlFm5UxuYlc2O0nco2n4xQLBw7nywcdJoA0bI60HKGepG+K1el7vOdpkx6sdW0AA0VRsURpE1J4YWxZ5mccWOKrISRKptQLmAKZbD01zjsFlm48LgEBlxAEUIBVDQjYc4oPk74LI0tLXOWpblS0OYABydt53DZrrp0Neee33JBDiCCCKgggggCCCCAIIIIAggggCCCCAIIIIAggggCCCCAIIIIAggggEnag/FI4hwx4Red2jECTKl1WUgPO9KYf2qZblA0qYu/lQvzzeyCUrcu0NgypXiwKzMtx5KdUyOQWi0YcvrHZqetz/p74z7ab2m0EHOhbYNiD4mGQqesxqiljvrErZLFv1OzrjUiOpeSK7+Lsk2YRnMmgf4UlrT2u0Wq9rks9oA42RLmEZhmUYl6VfnL2GE+CNl4qxyl3gt4mJHsIiZYZQRQ77lTLtEqfLnTWs4nIk+XMczVSW5wB0eZV1wsVyxUz0i1kQnfV3LabPMkPzZktkPRiGTdYND2RCcCbwedYpYmfnZRaRNFakTJRwGvSQFb/FAT8ZEYjIgNhGRGBGwgMiOZeVqzssyTNHNKFOoqxPt40eEx06IjhRcq2yyvKNA3Olk6BwCBXcCCVPQxhR5/abGnGRm3SXluyOpV0YqytkQRqD0/jQiCzS8URSbz2DA0qKUI0qDqK7DkDXeIsHBuesubLmhcWE1wuFIzqCCBkcjrETNs9IWsJoYLHY/J1KYJOakxZbTDgVqYAmNymChqpwMlRQDIEamLanPPb/0pFb4BzybME3JLbxrT/R7Yscvnn8fVSESnUEERXCS3NIsdonJTHKkTHWuYxKhK1G0VEVErBHlqXbbdaJjFZlqmzDymwNNdqVAJKroKkDSmYELCxXn6u3+G0/KA9PwR5h8xvP1dv8ADaflB5jefq7f4bT8oD09BHmHzG8/V2/w2n5QeY3n6u3+G0/KA9PQR5h8xvP1dv8ADaflB5jefq7f4bT8oD09BHmDzG8/VW/w2jdls3xnzG8/V2/w2n5QHp6CPMPmN5+rt/htPyg8xvP1dv8ADaflAenoI8w+Y3n6u3+G0/KDzG8/V2/w2n5QHp6CPMPmN5+rt/htPyg8xvP1dv8ADaflAenoI8w+Y3n6u3+G0/KJryb3/apd4yZfGzGlzWKOjuzLzWINGJwsCBmOkQHoSCCCA4Bw2vlbRbJk6tRLrKkjYAtQ7jfifEcXohYqkpCxJOcP+FtmSRaMEvJQAAN1QDlT8aRtIkUl9NIki1rZUw0MT1lSkxOsHsGcQyc3tix8Gl4y1yF15S1HRiAPsJjSO22WXglovoqq9wAhaCCIGVomKDSo74p1kYWa95kutJdul8ag2CfJAWaoG9kIc9UWW8Hq56MoqUpePvlF1SxSGc5/3s/koCN/F1MFxdIzBGYIBG4jURsIDaMwCMwFN4dcC0tq8bLoloUUBOSzANFc7CNjdhqNOOTbNMs7tLmo0t1NGVhQjdXo3EVB2EiPSsRd9XDZ7YmGcgag5LjkzFr6LDOnQag7QYDz+8+sK2RYvN6eSyYDWzzlcbnqjDtUFWPgEMbPwCtqsAyy1HpM60/5Cx9kStRduAL8nCB/cSyTuoWC9/L8MWxCA5FczWldTRUrSKVwbvEJJtElFmF5COpcADEyAqtKEkGoJA64fcBkVg7uS8zKpYlm7Sc6xIWLlEFw3/Rlt/dZ3+W0TsQXDf8ARlt/dZ3+W0aZci8jUnFeEwZf+lc5iv8AeydkdtSwgegetPvji/kR/SM391f/ADZMdttU8S0Z2rRVLGgqaAVNBtOUFk3w081G6X4P6oPNRuTwf1Q2uy9Vny8aggVIIJFQRqKqSD2GNZt8S1miUQak0xZYQ2EvhzNa4RU7sS78pszS82WyzzDvzTol+D+qDzUbpfg/qjZbQDp74Z3pfCSGRXBOMkAilBQgZ4iK5sooKk10hbJ7Oeb1ck8nXmg3S/B/VGkyzgAnChoCaBMz0CrUrFd4TcMmsRJayPMlggY1dAa4FY8g50GKlYT4K8N0vB3QWd0wYTVirDlYtKDZh9say5rO+cTrMRpIJyrki5GpyoXrXLqzjdOUQOJw1NKsi0GVamjabOvozh2oRssA36CMYlrXCK78qxFY806Jfg/qg806Jfg/qiKvzhItmdEMmZMLgscGAKqhlU1aYygsSwAUGpiYFo6IDTzTol+D+qNPMuVXkaaYMu6saXleSyJXGMpIqBQUrUmgzYgAdJMbyrejSxMzCFMdT6NMVT2RNm4v1ubnhv5qN0vwf1Qeajcng/qhjc99LaEDhGlkqGwMUx4GrhYhWOGtCKGhBBiTWbU0pCXSzPFN5lhDU5goa5JTTtjzxwH/AExZv3hvc8elY81cCP0xZv3hvc8VHpWCCCA8m2+WwflOzigoWzNNnuix3Y2ORXaMoh7SmNANq5fL8dMOuD8+gZO2JFpV2pWLp5M5OO3KfQls3w95EUa0PRo6N5H5dZs5/Rlqviav+mKjpltt8qSuKbMSUvpOyoO9jGtlvGVNQvJmy5ijLEjK613EqY4B5T7zmTbynK7ErKbAi/VVQBWg3k1JPT0CIXgze82yzxMllqjnqK0dNqOBqCPxWM61j0TaCCqs2QoancRtP42RXfJ2hmSZ1sYcq1z3mCooRLlky5S9gVu+N+HNseXd85VB4yaVlSxXNmm8jkkamhY5bosV12FZEiVJXmypaIOnCoFe2le2Kh1AIKQRUbCNhGojcQGRGYBBAEEEEBiEp4qU/a+EKw2t7EJWm3PqiVZ7RF3MA00DL8ox90J37LtJKPZhmpYPygrElUprqMjt2xtd+cyZT0zEwgqDked/pWMa3h5ZCeLQvk2FcXXQV9sRPDVgbstoGf8AZZ3+W0SkzRQRsr3U+cRQ4QWL7XZ/4sv+aOkc65V5E1IvGaSCP7K+op/eyY7fNYYTnEOeEFi+12f+LL/mjH0/Yvtdn/iy/wCaKHc1wiEimQyGgiq3vdiY+NLsShdjVgVLTKKWI2UAAFNASInUv+x51tdm1ypMljLZXlmp1zyjb/aCxfa7P/Fl/wA0TJ+pvX5W91EcSmf1REhPoSNDTPfQ74jP9oLF9rs/8WX/ADQtZ7xkzVfiZ0qYVWp4t0crWuEnCTTMHugrnnlInszUGEhZoC4TVq8UyzcQ2cqWoHUd8K8CbuezXnOkTGxmWjUbNcQPFsjU28lyOsHdG/C273l2JpkyWSZTy2rkTVqSjhpqOXWn3RYbksExrwtdsmABXKSpIrygiKA5pSgBZQwzOrR047348v8Alz65/m2f4WmRr2Qg7UBO4VheRr2Q1tTlUYjYCe7M+yOboaWmziY6MdFrUZUIrmDUZgkAdkP1asNLNzevPvzrl1wrY5mKWDSmuXUSPhDJDbYdOAUAIqK7dNsRXCJyLLNAFS0t1AqQc0atKZ1oCR1RLNzR1/OGV4zSkqY685VJXLFRqck0250idemufcVng3ZyTKwuQJcsCpU1fAAtQXJNCCdMjr1XGXzh1xT+CEtkYIcWUtqkg0JLA1Fe7LLKLhL5w64zxJnhr5N3yeR5q4EfpizfvDe549Kx5q4EfpizfvDe5425vSsEEEB5estHSu2gU9FND2GG9kJSYYW/NzDu17I2tqAOGGh/B+ESLWtpPKjrXkfQLZp0wnnTFTwiv/6COZWW7GmLjJwrv2mhofj3GJ26r+tFnlGRIYKgYuWwhiSwwkMT+ytCtDC9MffncSfCS5Fa0OeSxMx2LftOT8Yj7VISxymm4a0RyaUHKZcCDMbWavZGy384blqpA3AjaMq164ZXzO8+KylcSlBBwtmrNvZhQgAHq1J3jz8zrfPp6v4/x549pS5b3lNbZTT5TthCPIlo6izScUsNxhU0LzOSaE5DD0AjrqEEAjQio6jpHMWup7LL4iYtTKlh1K54glWQqRnkw01yPb0O5AvmsnAxZTKlkMxqzAoCCTvNY7cdW7rn3Jzmfp5BGYI25siNhDW22oSwMqk6RH/Sr7l7vvjl383PFyunHxddTYnIzEIL2fcvcfnGwvV9y933xn/c8NfwOkxBCVnm40Db4VjtLs2OVmXGDDe3FsAw01zruodNxrSHBhKexC5VOeg/8HKF9E9qtcVtV5s2WkwY0PK1FMypocgcxsOyLDiYK1GBOLXFT6q7QfjEHddkUTZ+CVSsyrYRQ1q+bEDM5nviZsynA2VDxje4b4xG6fueSD+qenYI5NK4DWk2QS/NAZxSgmedNhrU4W4vFhoFOGlI6s55C/8ADPuWELHa3LFDLIVVTC5OT1UVpls6zpnTKt74nWbb7/P/AFiS3XIT5ObdUEWdANo49TXdQ4cvbCUzyeW4VrIUBjRfyoOE586icoeH2x2C9r4EhcRXFkWPKw0RaYjWhqasoA2ltgqYdS7Uj8pcLDSsdPszefGuJzeA1ucAcUajUtMZtmdFKDDpvOgiVurgBPSZWfYVmpR+SLTgNSylDiWh5IDDpxVplHUrVaCry1EnGrk4mGidJyz1OtNDqaA1fhXwztNimUWyy5iE0X8sVmGioWJl4DkC4HJJ2VpFltuRbzk2o4cDJX/s3/3n/miR4KXJMs1otDNJ4lJkpAimaZxqjPjJZiSPzidxh3wM4WvbkdnkCUUYrQOWqKKQc1G0kabIn571f/4396Rm8+fP4fgttmDIVcpRqCjc051p7IUkSwRyWVhXUGufZDiYNMieo0+MayS2hUjpLYoDMuWQawmZO8im2ulOmHUEBzZ+Dd4ggSr0UIpfAH5bBG0BZqkkKBmSaUNKRdbqsRlyJcvHjKIqs5JYuwHLYk6ktU9sO3rXJWOYzxUHdWHEW9WpJhIyzhA3Q3tNnBRlYgKwKmuWTCnxh9GkzTQnqND3xFQdzXYJVQHQ10C78sR1J2CJdJJBBrGExBuaaHaWrTsrDiJJJMi3q27WY81cCP0xZv3hvc8elY81cCP0xZv3hvc8VHpWCCCA8z22TjQMNafCELL+Ul4DqMxD+WaIv40hhPlFGxrsOY3j/wARhpYrub+zS9lMQI6Q7AwnOIAOe45dGcbWFgbOSB9cnrqqfg9MNbS52kDoyjP68fU/mqOnziTGkp6HI5xq4zh9YLsedOlS5YGKacIroDQmpoDQACpjTazW/hY0yxyZlAZ8iaEYtUq0t0blHSpqigiu2uecdE4I3iLRY5b1qwqrdFDyR08krnHGJ0idZJxlzEKOpzVtCCKV3MpFc9DnFs8mV44LWZQNEmq3J2Y0qykbuSHFIT26Tu+JXVYIII22i76HMPX8IjDE3eyVl13EH4fGIEMI+b/qZnb3/Bd5bRltI1DCFrGnGTFGyufVtjlzNuOvVyasFjTDLUdHvz+MLRmMR9aTJj5lu3QYbWwHBkzLmM1JB9kODGjrUUhSe1eu2UzTJubZOK6mp5WZy164lrNLJUj9c7DuWGt0rSZaMz+cAyFfShxMtIly3dixo2QHPZmCBEUb2YgDpMZkatPG/Nr/AMM+5YxK5q/sj3CMtXi1xABuLNQDUA0WoB2iNZZ5K/sj3CNsIK9LFKtA/KAE1A1IoFfGoyyHKCk76Z1hfgywMokekcu6E7chXEqsVFSQVCk1bOnKBzzOyEeCrn8opNaPUnLMkmpyAGu4Dsi2T2xz1dstWd9F6o5Zw1An2mUmKqvOwLQUKq+BHIJyb82jgjKjrHUbQtVArSqkV3VGsUa/brmS5ch8KtxdrkE4asaE4GbTLVTQQ56s6jXU3mk/J5YzZ59tks2Iy3RATziMUzCaD0kwNQRdm52h5jDQ6krTZ0GK9c8oWGXaLRaXAM6e8xyFLFFaYqSpfJqXoX1A+t0RtN4c2DIecFSdPyUw6jLIpvIPZF7v2upzMmJ28bVMWU5lqWmBTgXCc22VrTLbqNNY1u60TSrLN5yuQGw4A6UBVwtTTnYT0qdhEQUnhrYJYCNaGJ1H5KYMjsyTfWJS7r9kWksJLlyhXFVHSmMOV54Fa4DpGc/Wt/ExLck57ojLutVpZ5gmywihuQRTMVO3EcWQBrRdaU3SUjXshLq1iYsubM9/9IG033altwlCUnEBZdXbEGYuxVsB5vJquRGdDnmKWHjWiocJ7tW22Ga0tcU1pYw01JVg2DvDDrMSnBmW6yKPsIAXPkURA65k5Bw+mW4RJbuNWTNSV6T5ySaylDPUZEVyrmQuJammyo+EKWee5lqXAVsILAZgGnKApWtD1ws3MHX84h+ENiWdKVWJCLNlu1BU0lnEP+YL3Qvjyksskz/khc9/tOtDJVShls6gKQylJpRgScm2aVzVs9ALAs0kiI0WZDNSYMnVGXTVCVJBO3MA/wDk1fy+cOuHO55Os3weR5q4EfpizfvDe549Kx5q4EfpizfvDe540y9KwQQQHM5nASzu7Nxs0AuzUHF0FWJwryMgK0zrpCdo8n0nCcM6YuWrBXHaAF98W24LbJtMkMuTrRZksgq8uYBy1ZDmprWm8ZgmJC1S0VCSMgQT1A1b2Axz8teHHrfdHmitKEwOSyucqUBxLSlTtl79sQdoAGSjrP41iW4S3lx0150uolk8WK64EJ4tv8WJz202RDWhgBRRViO3rg8t89Wmbtnvi68AMSO09ZMye0tTRZeHHRzgxKGIDaHKoyNdkUhZdWw1zPObYq7SOmkda8mEkCXNmAUBKoo/VUZeykajfM8nVtuyfea4bTZFsay3JRzMSdPZaHIKgCy1JKk1ZubSmjBLgzwENktKznnK+ANhCqRUspWpqcsmOWeyLpigxRrHTJ7ZhlabxRagMuIb9Bvrth5iio3qlJjdZjj8/d558O3w8zu+T20Wl5mswU3UNIarZHOjp21HwiN4sbh3RkKBsj59u3a90n19JT6Nm7Ch6mPxESNxuMWAoVdRVqih3do6RlEbdwOIRZ5agCoFI9Hw/HvUrj8vyXLKWjEa4oxij3PE2jR2oCd0ZxQnPnBELtkFFc/YO05dsBD3daCJs/MZzAdB+tGkm38bPri5MqvFjDTG+aTJoNOUFqZYppiYnnKYibvvwzHnKZc2Ss11LTDQiWhJDVZTyWNSobQE12RcWscsoqKoVUA4vBQYaCilTsoMtxBINQSIjVLzjVAf1D7hBJkAqpqeaPcIxOHJFTU4TnpXIZ02RvImAIuf1V9wiso+8LvDkAMymoNQEIrXaCQTBdtxLJZmExmLbwoHsEZva+bNZwpnzuLDE051TQco0UE4QCCW0FakiJITVoM6+2CZPbLSgaZ6Q3tEkU1Oo9HfX6x6I2nW1FZFZgGeuEZ50p3agZ7SBthO32+VKTHNcqtVWoDElnYKqgKCSSxAAGecNayo6/rsWfKWUTRXZCagNzJst6Fa0ZThoRXQxXr08n8uayFeKTCHySUJasWw0xYNaYcjXLE2sW6cVOAqScwQTU5FlI12QnZJs1JVZzBmFSSg1GwAYRU9FNwz1ObzL1L+wzxfKjJ5MVqazKBjlRWODpXTf9aukT/Bbgqt3vNVJjTOMEsmqhaYBNGVNa4vZDi5r6mvMeXMVgcWRYBfqKSFA1UEkA65RGeU2TNmWCYspXeYWk0EsEvQTCTQLnpWNfbYlmVc5INdNkN7VM4tHmHIIjNU6DCCc+6PN/0LeP2e1+CZ8oDcl4fZ7V4JnygPQlySCkiWCDXACesip69YfrLpotOzfrHmwXJeH2e1eCZ8oPoW8fs9r8Ez5QW3XphgcIy2/OGd4KRLOR1UZVBFXUVBG6teyPOn0LeP2e1+CZ8ox9CXh9ntfgmfKCPQCzWFoRK8niuUKDV3IlmtP92RTpiXRTUZHWPNH0HeH2a1fw5mzTZB9C3j9ntfgmfKM8yy1bdeoY81cCP0xZv3hvc8NPoW8fs9r8E2JjgRcVrl3nZXezTkVZtWZpbhQMLZkkZRpHoiCCCArF63OzzBaLO4lWpQBipWXNUf3U9Rzk3Nzl1G6IHhRf7PY3TAZVoR1WbKY5qpDHEp0eW5UAOMiCQaGoi8hYgOGd1JOs5YqodKYXpVlViAwrrhJwkjorsjB16cmkSyJYTUiWi57StA1T3xE2mcWJVDVdKjLF90SN5S5kqst+Ti6RRgKc07Rp7t8RjswFAPZEjzzmtZQpyRtIxHtyA7fhHbPJ3ZqWIEimJ2PZQAe6OK2SVMZskJp0UHaTlSLlct6WizykXjpgUATAqU+tMGJWDbDiO46xqOnE8uw8WIwZcc5XhJNXG/GPVakBmLA06NCDSmmVeoxarPfp+tQ79h9kOupz7dueb16TJSKteAL3vJlVPFiyzJkxfqscfFoW6QTFnScGUMKkEVEVq73x3pa5tMpcqTZ1PTypkwd7LFslJsTP0TKJ5nczD3GIDg/ZhOsZnTBysc/DTIYZc11l5dSCLG1sA1y7Ij7I0qTZuKlsSqI4GLNjXExJIAFasYxfj5/tGp31/cy4NS3n3dLn5CdNklxTmBzXByTnStNsSnBi1mfZJM1ue6DHTIcYpKzBTZy1bKG/AoFbvsihTlITdTmgw/ue7TI45agy3mtMRQM0DgF1O/8pjYftRrnmT1Gb1b7p9hgwwtSA0GZjTJu9FBJNABUk6Ab4hrwdmlmYRTMLIQ6mY5wo7DfnUDYBWHFqeZMwuq4pKtUro0wD6w/VB0B1pnTUZ41Z9plhDVJSmY37bVSWCNhAxnuiLDe4LMqPPl0qqlEzzqAGBrXWvxhYyXs2aAvJ1KDN5e8p6Sb11GyFLoH9otX7af6olsMC03msGQEGoKEg7wQKRpK5q/sj3CFrVp/hb4Q3B/J/4B/wBMVEdeVlE5pZA5pIxZhgGw4sLDNTRfdEoumUM7I9VxbCajqOkL2V8SA9fsJHwhkXbmFp0pTgJUEqKqSASpIoSDsyiu8L5hAs4BpS0I7Vphwojkgk6EitOrvsszReqK1wyNJK0C42mIAzaqqNiLKPSyp1M2cZ69NcbsLXLxmEYiCnGcg1BJ5SliaDKpNaZ6mlBSJO3khARsZa7aCueW2I+5JmKWhy/OECmlKpT5dkTM+zkqakAU2nLtyhx4id+bdVqRaaWuXkRVWGYoDtB9+u6Jq2a9i/64jJdzzmmq4MvCjbHLZbgMGWXTD+9nwCpFck0O8vG77cuJZPKlcPOFUywLKCSw3Gh+WWwhSmHkjIgk4tuzTotciZjRXGjKrZVAzAOQOY125wxa8gdZdesg/CM/Sf6nt+6DSQghvYrQZjhQtBUAmtQK9mcTH0WfTHd98BHwRIfRZ9Md33wfRZ9Md33wEfBEh9Fn0x3ffB9Fn0x3ffAR8LWTnr1w6+iz6Y7vvhWzWDC2ItWmmVIB/BBBEVVJVpvGaAySbPIVgCOOeZNmiumKUioFO8Y8oUN0WqZ+etzFa8pJMqXKRhXmkvxj06mETZMYxRMXVCvPg/aJZyQTUAIxLVmGdV5Oo1O/XUxU5xO0itevTpjslrZuLYoeUBUbdPjSOYcJLtWY3GEVEw5naHGda65gV79mUNJNRCA1qBl7+3dG2rAkVOIEnP6vNUblBpl0dOS0ixggDDUnaTXOuxRp1dIifsfB6Y1BhK9YC07NfZGPv1fUdPpzPdQyyw3Jo1DqRQHPWlTu/BiQuy7J8x1VDyBlhAOQpQYnJJy3ndpFyu7gxIQAupdukkDuFInZUlEGFVCjcBQeyF466/qWfJzz/TCNks4ly1QGuEUqdSdp76wqRCoWACOjjbpLi67I0axoQQQMwRu1FDnDmNoBtYrIkqUkqWCEloqKKkkKoAAqczkNTDkCCMwBDO1SWmMFP5ulWpq5rkp3LtO/SHkas4EBmoA3ADuAio2U2la2lJeITWx8g54NFDSjrvFDXla61mb/AJ35MS1501hLHQG/ON2IGh9LdFUKMgoAAIIAAFBEVXboves6eRInFmKnCENAQDUFjQDM7c8jlEt/an9CQv8AEf8AlEP+OrtHfGS0AnMTJVJrySK7+aKwgiTAAKpkANuwQ8mISBQ07KwnxL717j84qK39EW5TyLbKCB2Kq1mLEIcQWWWWauJVxChoCSoqToZSw2abLlojzEmMBynw4MbE1ZsIyWpJyGkP+Kmb17j841MuZ+p7fnF0IrMdtCmXQ0NLyu55yhcYQq1Qy4q6aa9XdEhxUz9T2/OM8XM/U9vziWSktnkxs1keWqiqGhxZYlBoVyPOOg6dsO51pmKpJRKAem5PYBLqT1RlpM3YUHYfnBxU39TuPzhJJ4LdIzeOZGUBELKQCGbEpIoDzdmURVus8xLNR2DMCoxVYk8tzniFRTEBqdImUkTBoV1JzxsczXVmOXRoNBDa8LunTRh4xFXWmAmp68UVn6zd/VUhezWczDuA1P42xLf7NP6xPAf54dS7nmqKCZLAH+7b/uQUjZ1CYaCgBB9tYskQf0VO9ZL8Df8Acjdbvn7ZqU6EYHvMw+6IqZgiL8xmetjIsMz1hgJOCI4WKZ6wwoLK/rDAPYIQWUw+sTCoHTAbQQQQEGtqY/3T96fzRvxp9W/fL+cCxsY566Y084Yf3Tdrp84rd6WZSXl0wCZmASDhavJIpsrFkJiJvuQHyrQhahgBXqzByhaSIjgpbpctWlsKzcZ5BbDmBnSupyPhiyi8nGkkeMfKIOzXdy64hipmwRQx6ztiUlCghq5DyXeMw6yQB/xB8oV+kH9WvjH8sMqxnFF2p9YeG8Jnq1/if0xg3jM9Wvj/AKYagxtWJtMhb6Rm+rTx/dB9IzfVp4z8oSrAIbTIW+kJ3q08Z/ljBts4/UTxn5RoI2ENpkHnU/0ZfiaNJk+cRzZfe0LiAxREyp06ZacTIg4pKLXFgLTNWU6khVwnrh5NtU85UlZ/tmNpY5RhSy5sSYgzLE+lKSe3GY34ufs4odWP5w6XKMKxJ1pFDyXXCK60FaaVpnSFI1XQRtG3MQQQQBBBBAEEEEAQQQQBBBBAEEEEAQQQQBBBBAEEEEAQQQQH/9k="
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.sms.jsx",
            lineNumber: 85,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.sms.jsx",
        lineNumber: 75,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/app.sms.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}, app_sms_default = Sms;

// app/routes/_index/route.jsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => App2,
  links: () => links2,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node"), import_react11 = require("@remix-run/react");

// app/routes/_index/style.css
var style_default = "/build/_assets/style-M2E3MJNO.css";

// app/routes/_index/route.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: style_default }], loader5 = async ({ request }) => {
  let url = new URL(request.url);
  if (url.searchParams.get("shop"))
    throw (0, import_node6.redirect)(`/app?${url.searchParams.toString()}`);
  return (0, import_node6.json)({ showForm: Boolean(login) });
};
function App2() {
  let { showForm } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "A short heading about [your app]" }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "A tagline about [your app] that describes your value proposition." }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    showForm && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react11.Form, { method: "post", action: "/auth/login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Shop domain" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "text", name: "shop" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "e.g: my-shop-domain.myshopify.com" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 31,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { type: "submit", children: "Log in" }, void 0, !1, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/auth.$.jsx
var auth_exports = {};
__export(auth_exports, {
  loader: () => loader6
});
var loader6 = async ({ request }) => (await authenticate.admin(request), null);

// app/routes/app.jsx
var app_exports = {};
__export(app_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App3,
  headers: () => headers,
  links: () => links3,
  loader: () => loader7
});
var import_node7 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var import_server4 = require("@shopify/shopify-app-remix/server"), import_react13 = require("@shopify/shopify-app-remix/react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default }], loader7 = async ({ request }) => (await authenticate.admin(request), (0, import_node7.json)({ apiKey: process.env.SHOPIFY_API_KEY || "" }));
function App3() {
  let { apiKey } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react13.AppProvider, { isEmbeddedApp: !0, apiKey, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ui-nav-menu", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Link, { to: "/app", rel: "home", children: "Home" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Link, { to: "/app/additional", children: "Additional page" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return import_server4.boundary.error((0, import_react12.useRouteError)());
}
var headers = (headersArgs) => import_server4.boundary.headers(headersArgs);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-63AH7P3C.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-CVCDSR74.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-UARPE7NL.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MHRC3U7V.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-OSEBD7PO.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-F4OPOD6B.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-MIBD2XN6.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-SU66BP3D.js", "/build/_shared/chunk-NQSUEL72.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-AYACUEBS.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.additional": { id: "routes/app.additional", parentId: "routes/app", path: "additional", index: void 0, caseSensitive: void 0, module: "/build/routes/app.additional-KTXRYS5N.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/app.sms": { id: "routes/app.sms", parentId: "routes/app", path: "sms", index: void 0, caseSensitive: void 0, module: "/build/routes/app.sms-IKUS6FLQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.template": { id: "routes/app.template", parentId: "routes/app", path: "template", index: void 0, caseSensitive: void 0, module: "/build/routes/app.template-TLWKASTA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/auth.$": { id: "routes/auth.$", parentId: "root", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$-4B5WQABX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-UKGTD4MC.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-MIBD2XN6.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-NQSUEL72.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/webhooks": { id: "routes/webhooks", parentId: "root", path: "webhooks", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks-JFV2P4HI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 } }, version: "4a325f9a", hmr: { runtime: "/build/_shared/chunk-UARPE7NL.js", timestamp: 1702538274080 }, url: "/build/manifest-4A325F9A.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/app.additional": {
    id: "routes/app.additional",
    parentId: "routes/app",
    path: "additional",
    index: void 0,
    caseSensitive: void 0,
    module: app_additional_exports
  },
  "routes/app.template": {
    id: "routes/app.template",
    parentId: "routes/app",
    path: "template",
    index: void 0,
    caseSensitive: void 0,
    module: app_template_exports
  },
  "routes/app._index": {
    id: "routes/app._index",
    parentId: "routes/app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/webhooks": {
    id: "routes/webhooks",
    parentId: "root",
    path: "webhooks",
    index: void 0,
    caseSensitive: void 0,
    module: webhooks_exports
  },
  "routes/app.sms": {
    id: "routes/app.sms",
    parentId: "routes/app",
    path: "sms",
    index: void 0,
    caseSensitive: void 0,
    module: app_sms_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/auth.$": {
    id: "routes/auth.$",
    parentId: "root",
    path: "auth/*",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
