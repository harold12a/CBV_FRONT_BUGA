import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { Input } from "@material-tailwind/react";
import Swal from "sweetalert2";
import axios from "axios";
import apiUrl from "../../api/apiUrl";
import headers from "../../api/headers";
import PropTypes from "prop-types";
export const ModalEditPost = ({ _id, title, date, image, description }) => {
  const [openModal, setOpenModal] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [dateValue, setDateValue] = useState(date);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [imageValue, setImageValue] = useState(image);
  const [initialValues, setInitialValues] = useState({
    title: "",
    date: "",
    description: "",
    image: "",
    time: "",
  });

  // Función para cargar los valores iniciales desde el estado
  const loadInitialValues = () => {
    setInitialValues({
      title: titleValue,
      date: dateValue,
      description: descriptionValue,
      image: imageValue,
    });
  };

  // Función para restablecer los campos a sus valores iniciales
  const resetFields = () => {
    setTitleValue(initialValues.title);
    setDateValue(initialValues.date);
    setDescriptionValue(initialValues.description);
    setImageValue(initialValues.image);
  };

  const editPost = () => {
    // console.log("id: ", _id);
    let data = {
      title: titleValue,
      date: dateValue,
      description: descriptionValue,
      image: imageValue,
    };

    axios
      .put(apiUrl + `/post/${_id}`, data, headers())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Post Editado!!",
          confirmButtonColor: "#F97316",
        });
        // Al editar, carga los nuevos valores como iniciales
        loadInitialValues();
        resetFields();
        onCloseModal(); // Cierra el modal después de editar
      })
      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Error al Editar el Post",
          html: error.response.data.messages,
        })
      );
  };

  const handleClear = () => {
    // Al cancelar edición, restablece los campos a sus valores iniciales
    resetFields();
  };

  function onCloseModal() {
    // Al cerrar el modal, restablece los campos a sus valores iniciales
    resetFields();
    setOpenModal(false);
  }
  return (
    <>
      <Button color="blue" pill onClick={() => setOpenModal(true)}>
        {" "}
        <HiPencilSquare className="text-xl" />
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Editar Post
            </h3>
            <div>
              <div className="flex w-72 flex-col gap-6 mx-auto items-center">
                <Input
                  color="blue"
                  label="Titulo del Post"
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
              </div>
            </div>

            <div className="w-full flex justify-around">
              <Button pill onClick={() => editPost(_id)}>
                Editar
              </Button>
              <Button color="failure" pill onClick={handleClear}>
                Cancelar Edicíon
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

ModalEditPost.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
