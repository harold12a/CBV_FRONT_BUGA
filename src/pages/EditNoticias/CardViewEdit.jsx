import { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "flowbite-react";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import { ModalEdit } from "./ModalEdit";
import axios from "axios";
import apiUrl from "../../api/apiUrl";
import headers from "../../api/headers";
// import { useNavigate } from "react-router-dom";

export const CardViewEdit = ({ _id, title, date, image, description }) => {
  // Formatear la fecha eliminando la parte "Z"
  const formattedDate = new Date(date).toLocaleString("es-ES", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const navigate = useNavigate();
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const btndelete = (id) => {
    Swal.fire({
      title: "Esta segura de eliminar la noticia?",
      text: "No prodra revertir esta accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(apiUrl + `/noticias/${id}`, headers()).then(() => {
            Swal.fire("Eliminada!!", "Su noticia a sido eliminada.", "success");
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
        className=" xl:h-[50%] h-64 w-[93%] xl:w-[100%]  rounded-full xl:rounded-lg md:rounded-lg xl:shadow-xl object-cover object-center absolute mt-[28px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src={image}
        alt="nature image"
      />
      <div className=" xl:mt-[16vh] md:mt-[18vh] mt-[21vh] ">
        <h1 className="text-center xl:text-lg"> {title}</h1>
        <p className="mt-1 mb-4 text-center">{formattedDate}</p>
        <Anchor to={`/noticias_vista/${_id}`}>
          <Button color="dark" className="mx-auto  text-center">
            Ver Informacion
          </Button>
        </Anchor>
        <div className="flex justify-around mt-2">
          {/* Modal */}
          <ModalEdit
            show={isModalOpen}
            onClose={closeModal}
            _id={_id}
            title={title}
            date={date}
            image={image}
            description={description}
          />
          <Button color="failure" pill>
            <ImCross onClick={() => btndelete(_id)} />
          </Button>
        </div>
      </div>
    </>
  );
};

CardViewEdit.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
