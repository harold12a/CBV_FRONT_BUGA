import { createBrowserRouter, redirect } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "./Index";
import Register from "./Register";
import SignIn from "./SignIn";
import Buttons from "./Buttons";
import Schema from "./Schema";
import Noticias from "../schema/Noticias";
import NotiView from "./NotiView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/register", element: <Register /> },
      { path: "/ingresar", element: <SignIn /> },
      { path: "/botones", element: <Buttons /> },
      {
        path: "/schema",
        element: <Schema />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
      {
        path: "/noticias",
        element: <Noticias />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
      { path: "/noticias_vista/:_id", element: <NotiView /> },
    ],
  },
]);

export default router;
