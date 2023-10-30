import { createBrowserRouter, redirect } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "./Index";
import Register from "./Register";
import SignIn from "./SignIn";
import Buttons from "./Buttons";
import Schema from "./Schema";
import Noticias from "../schema/Noticias";
import NotiView from "./NotiView";
import Cursos from "../schema/Cursos";
import Extintores from "../schema/Extintores";
import Capacitaciones from "../schema/Capacitaciones";
import Psicologia from "../schema/Psicologia";
import { Courseview } from "./Courseview";
import { CardPost } from "./CardPost";
import { Extinguisher } from "../services/extinguisher";
import { Ambulance } from "../services/Ambulance";
import { Inspection } from "../services/Inspection";
import { Training } from "../services/Training";
import { TrainingView } from "../services/TrainingView";

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
      {
        path: "/curso",
        element: <Cursos />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
      { path: "/extintor", element: <Extintores /> },
      { path: "/capacitacion", element: <Capacitaciones /> },
      { path: "/psicologia", element: <Psicologia /> },
      { path: "/noticias_vista/:_id", element: <NotiView /> },
      { path: "/course_vista/:_id", element: <Courseview /> },
      { path: "/post_view", element: <CardPost /> },
      { path: "/servicios_extintores", element: <Extinguisher /> },
      { path: "/servicios_ambulancia", element: <Ambulance /> },
      { path: "/servicios_inspecciones", element: <Inspection /> },
      { path: "/capacitaciones", element: <Training /> },
      { path: "/capacitaciones/:_id", element: <TrainingView /> },
    ],
  },
]);

export default router;
