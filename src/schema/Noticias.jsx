import { Input } from "@material-tailwind/react";
// import { Select, Option } from "@material-tailwind/react";
import axios from "axios";
import apiUrl from "../api/apiUrl";
import headers from "../api/headers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import { Button } from "flowbite-react";
const Noticias = () => {
  const [titleValue, setTitleValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const navigate = useNavigate();
  const create = () => {
    let data = {
      title: titleValue,
      date: dateValue,
      description: descriptionValue,
      image: imageValue,
    };

    axios
      .post(apiUrl + "/noticias", data, headers())
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Noticia Creada!!",
          confirmButtonColor: "#F97316",
        })
      )
      .then(() => navigate("/"))

      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Error al crear la Noticia",
          html: error.response.data.messages,
        })
      );
  };

  const handleClear = () => {
    setTitleValue("");
    setImageValue("");
    setDateValue("");
    setDescriptionValue("");
  };

  return (
    <>
      <div className="flex justify-around mt-4">
        <h1 className="text-xl pl-2 mt-2  font-bold">Noticias</h1>
        <Anchor to={"/noticias_editar"}>
          <Button color="failure">Editar - Noticias</Button>
        </Anchor>
      </div>

      <div className="border-t-2 border-gray-400   my-4"></div>

      <div className="flex w-72 flex-col gap-6 mx-auto items-center">
        <Input
          color="blue"
          label="Titulo de la noticias"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <Input
          color="purple"
          label="Imagen"
          type="text"
          value={imageValue}
          onChange={(e) => setImageValue(e.target.value)}
        />
        <Input
          color="indigo"
          label="Fecha"
          type="date"
          value={dateValue}
          onChange={(e) => setDateValue(e.target.value)}
        />
        <Input
          color="teal"
          label="Informacion"
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
        />
        {/* <div className="flex w-72 flex-col gap-6">
          <Select size="md" label="unidad">
            <Option>Capitan</Option>
            <Option>Teniente</Option>
            <Option>Sub-teniente</Option>
            <Option>Sargento</Option>
            <Option>Cabo</Option>
            <Option>Bombero</Option>
          </Select>
        </div> */}
        {/* <Input color="teal" label="Nombre de la unidad" /> */}
      </div>

      <div className="flex flex-col w-72 mx-auto justify-center mt-5">
        <button
          onClick={create}
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Enviar
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2"
        >
          Borrar Todos los Campos
        </button>
      </div>
    </>
  );
};

export default Noticias;
