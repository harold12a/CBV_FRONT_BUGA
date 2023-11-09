import { Typography } from "@material-tailwind/react";
import { Link as Anchor } from "react-router-dom";
export const ViewInspeccion = () => {
  return (
    <>
      <Typography variant="h5" className=" font-bold pl-2 mt-10 mb-4 ">
        Inspecciones
      </Typography>
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full rounded-xl object-cover object-center"
          src="/public/images/inspeccion.jpg"
          alt="nature image"
        />
        <figcaption className="absolute bottom-8 left-[225px]  ">
          <Anchor to={"/servicios_inspecciones"}>
            <button
              type="button"
              className="py-2.5 px-5 underline mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Solicitar
            </button>
          </Anchor>
        </figcaption>
      </figure>
    </>
  );
};
