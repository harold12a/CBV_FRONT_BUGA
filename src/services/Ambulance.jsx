// import { Link as Anchor } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "flowbite-react";
export const Ambulance = () => {
  return (
    <>
      <Typography variant="h5" className=" font-bold pl-2 mt-2 mb-4 ">
        Ambulancia
      </Typography>

      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <div className="mx-auto max-w-screen-xl px-4">
        <img
          className=" w-11/12 rounded-lg object-cover  object-center shadow-xl shadow-blue-gray-900/50"
          src="/public/images/img8.JPG"
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
        <Button color="blue">Enviar</Button>
        <Button color="failure">Borrar Todos los Campos</Button>
        <Button color="success">
          <a href="https://api.whatsapp.com/send?phone=3117435713&text=Hola,%20me%20gustaría%20obtener%20más%20información.">
            WhatsApp
          </a>
        </Button>
      </div>
    </>
  );
};
