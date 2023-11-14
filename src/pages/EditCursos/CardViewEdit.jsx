import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Button } from "flowbite-react";
import { ImCross } from "react-icons/im";
import { Link as Anchor } from "react-router-dom";
import PropTypes from "prop-types";

import { ModalEditCourse } from "./ModalEditCourse";
import Swal from "sweetalert2";
import axios from "axios";
import apiUrl from "../../api/apiUrl";
import headers from "../../api/headers";

export const CardViewEdit = ({
  _id,
  title,
  date,
  image,
  description,
  timeofCurse,
}) => {
  // Formatear la fecha eliminando la parte "Z"
  const formattedDate = new Date(date).toLocaleString("es-ES", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const btndelete = (id) => {
    Swal.fire({
      title: "Esta seguro de eliminar el curso?",
      text: "No prodra revertir esta accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(apiUrl + `/cursos/${id}`, headers()).then(() => {
            Swal.fire("Eliminado!", "Su curso a sido eliminado.", "success");
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
      <div className="md:ml-[30%] xl:ml-[3%]">
        <Card className="w-full max-w-[23.5rem] shadow-lg ">
          <CardHeader floated={false} color="blue-gray">
            <img src={image} />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            <IconButton
              size="sm"
              color="red"
              variant="text"
              className="!absolute top-4 right-4 rounded-full"
            ></IconButton>
          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                {title}
              </Typography>
            </div>
            <Typography color="gray">Inicio de curso</Typography>
            <Typography color="gray">{formattedDate}</Typography>
          </CardBody>
          <CardFooter className="pt-1">
            <div className="flex justify-around mb-2">
              {/* Modal */}
              <ModalEditCourse
                show={isModalOpen}
                onClose={closeModal}
                _id={_id}
                title={title}
                date={date}
                image={image}
                description={description}
                timeofCurse={timeofCurse}
              />
              <Button color="failure" pill>
                <ImCross onClick={() => btndelete(_id)} />
              </Button>
            </div>
            <Anchor to={`/course_vista/${_id}`}>
              <Button color="dark" className="mx-auto  text-center">
                Mas Informacion
              </Button>
            </Anchor>
          </CardFooter>
        </Card>
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
  timeofCurse: PropTypes.string.isRequired,
};
