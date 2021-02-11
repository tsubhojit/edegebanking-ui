import ConfigureSelectMaster from "./pages/configure-select-master/configure-select-master";

export default {
  pages: [
    {
      routeProps: {
        path: "/configure-select-master",
        component: ConfigureSelectMaster,
      },
      name: "ConfigureSelectMaster",
      type: "superAdmin",
    },
  ],
};
