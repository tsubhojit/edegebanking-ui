import ConfigureChequeBook from "./pages/configure-cheque-book/configure-cheque-book";

export default {
  pages: [
    {
      routeProps: {
        path: "/configure-cheque-book",
        component: ConfigureChequeBook,
      },
      name: "ConfigureChequeBook",
      type: "superAdmin",
    },
  ],
};
