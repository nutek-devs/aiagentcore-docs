import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

let apiSidebar: any[] = [];
try {
  apiSidebar = require("./docs/api/sidebar.ts").default ?? [];
} catch {
  // API sidebar not generated yet — run `npm run gen-api-docs` first
}

const sidebars: SidebarsConfig = {
  docs: [
    "getting-started",
    "agent-builder",
    "authentication",
    "webhooks",
    "widget-embed",
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
        title: "API Reference",
        description:
          "Complete API reference for AIAgentCore, auto-generated from OpenAPI specification.",
        slug: "/api",
      },
      items: apiSidebar,
    },
  ],
};

export default sidebars;
