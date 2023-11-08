import { Input } from "@material-tailwind/react";
import axios from "axios";
import apiUrl from "../api/apiUrl";
import headers from "../api/headers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import { Button } from "flowbite-react";
const Extintores = () => {
  const [imageValue, setImageValue] = useState("");
  const [extinguisherValue, setExtinguisherValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const navigate = useNavigate();
  const create = () => {
    let data = {
      image: imageValue,
      extinguisher: extinguisherValue,
      price: priceValue,
    };

    axios
      .post(apiUrl + "/extintor", data, headers())
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Curso Creado !!",
          confirmButtonColor: "#F97316",
        })
      )
      .then(() => navigate("/servicios_extintores"))

      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Error al crear el Curso!!",
          html: error.response.data.messages,
        })
      );
  };

  const handleClear = () => {
    setImageValue("");
    setExtinguisherValue("");
    setPriceValue("");
  };

  return (
    <>
      <div className="flex justify-around mt-4">
        <h1 className="text-xl pl-2 mt-2  font-bold">Extintores</h1>
        <Anchor to={"/extintores_editar"}>
          <Button color="failure">Editar - Extintores </Button>
        </Anchor>
      </div>
      <div className="border-t-2 border-gray-400   my-4"></div>

      <div className="flex w-72 flex-col gap-6 mx-auto items-center">
        <Input
          color="purple"
          label="Imagen"
          type="text"
          value={imageValue}
          onChange={(e) => setImageValue(e.target.value)}
        />
        <Input
          color="blue"
          label="Nombre del Extintor"
          value={extinguisherValue}
          onChange={(e) => setExtinguisherValue(e.target.value)}
        />
        <Input
          color="blue"
          label="Valor $ "
          value={priceValue}
          onChange={(e) => setPriceValue(e.target.value)}
        />
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
          onClick={handleClear}
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2"
        >
          Borrar Todos los Campos
        </button>
      </div>
    </>
  );
};

export default Extintores;
