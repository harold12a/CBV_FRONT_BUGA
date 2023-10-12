import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

const Noticias = () => {
  return (
    <>
      <h1 className="text-xl pl-2 mt-2">Noticias</h1>
      <div className="border-t-2 border-gray-400   my-4"></div>

      <div className="flex w-72 flex-col gap-6 mx-auto items-center">
        <Input color="blue" label="Titulo de la noticias" />
        <Input color="purple" label="Imagen" type="text" />
        <Input color="indigo" label="Fecha" type="date" />
        <Input color="teal" label="Informacion" />
        <div className="flex w-72 flex-col gap-6">
          <Select size="md" label="unidad">
            <Option>Capitan</Option>
            <Option>Teniente</Option>
            <Option>Sub-teniente</Option>
            <Option>Sargento</Option>
            <Option>Cabo</Option>
            <Option>Bombero</Option>
          </Select>
        </div>
        <Input color="teal" label="Nombre de la unidad" />
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

export default Noticias;
