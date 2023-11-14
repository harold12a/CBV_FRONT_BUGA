import { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import PropTypes from "prop-types";
// import { Button } from "@material-tailwind/react";
import { Button } from "flowbite-react";
import { Typography } from "@material-tailwind/react";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import axios from "axios";
import apiUrl from "../../api/apiUrl";
import headers from "../../api/headers";
import { ModalEditExtintores } from "./ModalEditExtintores";

export const CardViewEdit = ({ _id, extinguisher, price, image }) => {
  let formattedPrice = price;
  if (price !== null && typeof price === "number") {
    // Formatear el precio como una cadena con separador de miles
    formattedPrice = price.toLocaleString("es-CO", {
      minimumFractionDigits: 3,
    });
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const btndelete = (id) => {
    Swal.fire({
      title: "Esta seguro de eliminar el extintor?",
      text: "No prodra revertir esta accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(apiUrl + `/extintor/${id}`, headers()).then(() => {
            Swal.fire("Eliminado!", "Su extintor a sido eliminado.", "success");
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <>
      <img
        className=" xl:h-80 h-68 w-[93%] object-contain  rounded-lg md:rounded-lg xl:rounded-lg  object-center absolute mt-[28px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src={image}
        alt="nature image"
      />
      <div className="mt-[23vh] xl:mt-[26vh] md:mt-[25vh]  ">
        <Typography
          variant="h5"
          className=" font-bold text-center"
        ></Typography>
        <h1 className="text-center"> {extinguisher}</h1>
        <Typography variant="h6" className=" font-bold mt-1 mb-4 text-center">
          $ {formattedPrice}
        </Typography>
        <Anchor>
          <div className="flex justify-center xl:mt-[-5%] ">
            <Button color="failure">Comprar</Button>
          </div>
        </Anchor>
      </div>
      <div className="flex justify-around mb-2 mt-1">
        {/* Modal */}
        <ModalEditExtintores
          show={isModalOpen}
          onClose={closeModal}
          _id={_id}
          extinguisher={extinguisher}
          price={price}
          image={image}
        />
        <Button color="failure" pill>
          <ImCross onClick={() => btndelete(_id)} />
        </Button>
      </div>
    </>
  );
};

CardViewEdit.propTypes = {
  _id: PropTypes.string.isRequired,
  extinguisher: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
