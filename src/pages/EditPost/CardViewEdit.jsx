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
import { ModalEditPost } from "./ModalEditPost";
import Swal from "sweetalert2";
import axios from "axios";
import apiUrl from "../../api/apiUrl";
import headers from "../../api/headers";

import PropTypes from "prop-types";
export const CardViewEdit = ({ _id, title, image, description, date }) => {
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
      title: "Esta seguro de eliminar el post?",
      text: "No prodra revertir esta accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(apiUrl + `/post/${id}`, headers()).then(() => {
            Swal.fire("Eliminado!!", "Su post a sido eliminado.", "success");
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
        <Card className="w-full max-w-[23.5rem] shadow-lg mt-2">
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
            <div className="mb-2 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                {title}
              </Typography>
            </div>
            <Typography color="gray" className=" font-bold">
              Fecha de publicacion
            </Typography>
            <Typography color="gray" className=" font-bold">
              {formattedDate}
            </Typography>
            <Typography color="gray">{description}</Typography>
          </CardBody>
          <CardFooter className="pt-3">
            {" "}
            <div className="flex justify-around mb-2">
              {/* Modal */}
              <ModalEditPost
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
};
