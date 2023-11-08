import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { Input } from "@material-tailwind/react";
import Swal from "sweetalert2";
import axios from "axios";
import apiUrl from "../../api/apiUrl";
import headers from "../../api/headers";
import PropTypes from "prop-types";
export const ModalEditCapacitacion = ({
  _id,
  title,
  image,
  date,
  description,
  price,
  timeofTraining,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const [imageValue, setImageValue] = useState(image);
  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [priceValue, setPriceValue] = useState(price);
  const [timeofTrainingValue, setTimeofTrainingValue] =
    useState(timeofTraining);
  const [dateValue, setDateValue] = useState(date);

  const [initialValues, setInitialValues] = useState({
    title: "",
    price: "",
    image: "",
  });

  // Función para cargar los valores iniciales desde el estado
  const loadInitialValues = () => {
    setInitialValues({
      price: priceValue,
      image: imageValue,
      title: titleValue,
      description: descriptionValue,
      timeofTraining: timeofTrainingValue,
      date: dateValue,
    });
  };

  // Función para restablecer los campos a sus valores iniciales
  const resetFields = () => {
    setPriceValue(initialValues.price);
    setImageValue(initialValues.image);
    setTitleValue(initialValues.title);
    setDescriptionValue(initialValues.description);
    setTimeofTrainingValue(initialValues.timeofTraining);
    setDateValue(initialValues.date);
  };

  const editCapacitacion = () => {
    // console.log("id: ", _id);
    let data = {
      price: priceValue,
      image: imageValue,
      title: titleValue,
      description: descriptionValue,
      timeofTraining: timeofTrainingValue,
      date: dateValue,
    };

    axios
      .put(apiUrl + `/capacitaciones/${_id}`, data, headers())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Capacitacion Editada!!",
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
          title: "Error al Editar el capacitaciones",
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
              Editar Capacitacion
            </h3>
            <div>
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
                  label="Nombre de la capacitacion"
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                />
                <Input
                  color="blue"
                  label="Valor $ "
                  value={priceValue}
                  onChange={(e) => setPriceValue(e.target.value)}
                />
                <Input
                  color="blue"
                  label="Informacion "
                  value={descriptionValue}
                  onChange={(e) => setDescriptionValue(e.target.value)}
                />
                <Input
                  color="indigo"
                  label="Fecha"
                  type="date"
                  value={dateValue}
                  onChange={(e) => setDateValue(e.target.value)}
                />
                <Input
                  color="blue"
                  label="Duracion de la Capacitacion"
                  value={timeofTrainingValue}
                  onChange={(e) => setTimeofTrainingValue(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full flex justify-around">
              <Button pill onClick={() => editCapacitacion(_id)}>
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

ModalEditCapacitacion.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  timeofTraining: PropTypes.string.isRequired,
};
