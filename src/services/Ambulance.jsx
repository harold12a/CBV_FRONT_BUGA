// import { Link as Anchor } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

export const Ambulance = () => {
  return (
    <>
      <Typography variant="h5" className=" font-bold pl-2 mt-2 mb-4 ">
        Ambulancia
      </Typography>

      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <div className="mx-auto max-w-screen-xl px-4">
        <img
          className="h-96 w-full rounded-lg object-cover  object-center shadow-xl shadow-blue-gray-900/50"
          src="/public/images/ambulancia.jpeg"
          alt="nature image"
        />
      </div>

      <div className="mt-[4vh]">
        <Typography variant="h5" className=" font-bold text-center">
          Datos Generales
        </Typography>
        <Typography variant="h6" className=" font-bold mt-1 mb-4 text-center">
          Ingrese todos los datos requeridos
        </Typography>
      </div>
      <div className="flex w-72 flex-col gap-6 mx-auto items-center">
        <Input color="blue" label="Nombre" />
        <Input color="blue" label="Telefono" />
        <Input color="purple" label="Desde" type="text" />
        <Input color="purple" label="Hasta" type="text" />
        <Input color="indigo" label="Fecha" type="date" />
        <Input color="purple" label="Informacion Adicional" type="text" />
      </div>
      <div className="flex flex-col w-72 mx-auto justify-center mt-5">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Enviar
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2"
        >
          Borrar Todos los Campos
        </button>
      </div>
    </>
  );
};
