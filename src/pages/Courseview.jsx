import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../api/apiUrl";
import headers from "../api/headers";

export const Courseview = () => {
  let { _id } = useParams();
  // console.log("id: " + _id);
  const [course, setCourse] = useState(null);
  // console.log(course);
  useEffect(() => {
    if (_id) {
      axios(apiUrl + "/cursos/" + _id, headers())
        .then((res) => {
          // data sin hora zulo date
          const courseData = res.data.response.find((not) => not._id === _id);
          if (courseData) {
            courseData.date = new Date(courseData.date).toLocaleString(
              "es-ES",
              {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              }
            );
            setCourse(courseData);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [_id]);
  return (
    <>
      <h1 className="text-xl pl-2 mt-2 font-bold uppercase text-center">
        {course?.title}
      </h1>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <div className="mx-auto max-w-screen-xl px-4">
        <img
          className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50 mb-5"
          src={course?.image}
          alt="nature image"
        />
      </div>
      {/* <div className="mt-2">
        <h1 className="ml-6 font-bold">Fecha</h1>
        <p className="mt-1 ml-6">{course?.date}</p>
      </div> */}
      <Paper elevation={3} className="mx-8">
        <p className="text-center font-bold text-xl mt-3 mb-4   bg-gray-300">
          La Federacion del Bomberos del Valle del Cauca y sus Regiones tiene un
          descuento del 50%
        </p>
      </Paper>

      <p className="mx-auto max-w-screen-xl px-4 mt-2">{course?.description}</p>

      <div className="mt-4 mb-2">
        <h1 className="ml-6 font-bold">Inicio de curso</h1>
        <p className="mt-1 ml-6">{course?.date}</p>
      </div>
      <div className="mt-2">
        <h1 className="ml-6 font-bold">Duracion</h1>
        <p className="mt-1 ml-6">{course?.timeofCurse}</p>
      </div>
      <div className="mt-2 mb-5">
        <h1 className="ml-6 font-bold">Precio</h1>
        {/* para que los decimales de la data aparesca exactos ya que es un number y no un string */}
        <p className="mt-1 ml-6">
          $
          {course?.price.toLocaleString("es-CO", {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
          })}
        </p>
      </div>

      <div className="flex flex-col  mx-8">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Separar Cupo
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Solicitar Ayuda
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Comprar
        </button>
      </div>
    </>
  );
};
