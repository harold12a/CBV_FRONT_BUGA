import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "./Index";
import Register from "./Register";
import Ingresar from "./Ingresar";
import Buttons from "./Buttons";
import Schema from "./Schema";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        { path: "/", element: <Index /> },
        { path: "/register", element: <Register /> },
        { path: "/ingresar", element: <Ingresar /> },
        { path: "/buttons", element: <Buttons /> },
        { path: "/schema", element: <Schema /> },
],

  },
]);

export default router;
