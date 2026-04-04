import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/aiagentcore-api",
    },
    {
      type: "category",
      label: "Agents",
      items: [
        {
          type: "doc",
          id: "api/list-all-agents-for-the-authenticated-company",
          label: "List all agents for the authenticated company",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-a-new-agent",
          label: "Create a new agent",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-agent-by-id",
          label: "Get agent by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-an-agent",
          label: "Update an agent",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-an-agent",
          label: "Delete an agent",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "doc",
          id: "api/register-a-new-user-and-company",
          label: "Register a new user and company",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/sign-in-with-email-and-password",
          label: "Sign in with email and password",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/logout-current-user",
          label: "Logout current user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/refresh-an-expired-session",
          label: "Refresh an expired session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-current-authenticated-user",
          label: "Get current authenticated user",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Billing",
      items: [
        {
          type: "doc",
          id: "api/list-active-subscription-plans",
          label: "List active subscription plans",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-current-company-subscription",
          label: "Get current company subscription",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        {
          type: "doc",
          id: "api/list-integrations-for-the-authenticated-company",
          label: "List integrations for the authenticated company",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-a-new-integration",
          label: "Create a new integration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-integration-by-id",
          label: "Get integration by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-an-integration",
          label: "Update an integration",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-an-integration",
          label: "Delete an integration",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/validate-integration-credentials",
          label: "Validate integration credentials",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/sync-channels-from-the-external-platform",
          label: "Sync channels from the external platform",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-channels-for-an-integration",
          label: "List channels for an integration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-available-connector-types",
          label: "List available connector types",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      items: [
        {
          type: "doc",
          id: "api/receive-inbound-webhook-from-a-messaging-platform",
          label: "Receive inbound webhook from a messaging platform",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Widget",
      items: [
        {
          type: "doc",
          id: "api/get-public-widget-configuration",
          label: "Get public widget configuration",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Health",
      items: [
        {
          type: "doc",
          id: "api/health-check",
          label: "Health check",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
