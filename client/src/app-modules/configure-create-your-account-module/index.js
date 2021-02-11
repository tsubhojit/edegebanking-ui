import ConfigureCreateOpenYourAccount from "./pages/configure-create-your-account/configure-create-your-account";

export default {
  pages: [
    {
      routeProps: {
        path: "/configure-create-your-account",
        component: ConfigureCreateOpenYourAccount,
      },
      name: "ConfigureCreateOpenYourAccount",
      type: "superAdmin",
    },
  ],
};
