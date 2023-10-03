import { createBrowserRouter, redirect } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "./Index";
import Register from "./Register";
import SignIn from "./SignIn";
import Buttons from "./Buttons";
import Schema from "./Schema";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/register", element: <Register /> },
      { path: "/ingresar", element: <SignIn /> },
      { path: "/buttons", element: <Buttons /> },
      {
        path: "/schema",
        element: <Schema />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
    ],
  },
]);

export default router;
