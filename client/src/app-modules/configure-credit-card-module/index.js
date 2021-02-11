import ConfigureCreditCard from "./pages/configure-credit-card/configure-credit-card";

export default {
  pages: [
    {
      routeProps: {
        path: "/configure-credit-card",
        component: ConfigureCreditCard,
      },
      name: "ConfigureCreditCard",
      type: "superAdmin",
    },
  ],
};
