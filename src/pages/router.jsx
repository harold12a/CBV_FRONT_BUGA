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
import { Card } from "./EditNoticias/Card";
import { CardCourseEdit } from "./EditCursos/CardCourseEdit";
import { CardPostEdit } from "./EditPost/CardPostEdit";
import { CardExtintoresEdit } from "./EditExtintores/CardExtintoresEdit";
import { CardCapacitacionEdit } from "./EditCapacitaciones/CardCapacitacionEdit";
import { ViewNoticia } from "../components/Noticias/ViewNoticia";
import { ViewCursos } from "../components/Cursos/ViewCursos";
import { ViewComponent } from "../components/Psicologia/ViewComponent";
import { ViewCapacitacion } from "../components/Capacitaciones/ViewCapacitacion";
import { ViewExtintores } from "../components/Extintores/ViewExtintores";
import { ViewAmbulancia } from "../components/Ambulancia/ViewAmbulancia";
import { ViewInspeccion } from "../components/Inspeccion.jsx/ViewInspeccion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/register", element: <Register /> },
      { path: "/ingresar", element: <SignIn /> },
      { path: "/botones", element: <Buttons /> },
      { path: "/noticias", element: <ViewNoticia /> },
      { path: "/cursos", element: <ViewCursos /> },
      { path: "/psicologia", element: <ViewComponent /> },
      { path: "/capacitaciones", element: <ViewCapacitacion /> },
      { path: "/extintores", element: <ViewExtintores /> },
      { path: "/ambulancia", element: <ViewAmbulancia /> },
      { path: "/inspeccion", element: <ViewInspeccion /> },

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
      { path: "/noticias_editar", element: <Card /> },
      { path: "/cursos_editar", element: <CardCourseEdit /> },
      { path: "/post_editar", element: <CardPostEdit /> },
      { path: "/extintores_editar", element: <CardExtintoresEdit /> },
      { path: "/capacitaciones_editar", element: <CardCapacitacionEdit /> },
    ],
  },
]);

export default router;
