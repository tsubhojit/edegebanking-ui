import Chequebook from "./pages/cheque-book/cheque-book";

export default {
  pages: [
    {
      routeProps: {
        path: "/cheque-book-request",
        component: Chequebook,
      },
      name: "Chequebook",
    },
  ],
};
