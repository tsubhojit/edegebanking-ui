import ConfigureDormatAccount from "./pages/configure-dormat-account/configure-dormat-account";

export default {
  pages: [
    {
      routeProps: {
        path: "/configure-dormat-account",
        component: ConfigureDormatAccount,
      },
      name: "ConfigureDormatAccount",
      type: "superAdmin",
    },
  ],
};
