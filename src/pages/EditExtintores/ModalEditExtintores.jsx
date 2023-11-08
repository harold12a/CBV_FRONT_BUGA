import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { Input } from "@material-tailwind/react";
import Swal from "sweetalert2";
import axios from "axios";
import apiUrl from "../../api/apiUrl";
import headers from "../../api/headers";
import PropTypes from "prop-types";
export const ModalEditExtintores = ({ _id, extinguisher, image, price }) => {
  const [openModal, setOpenModal] = useState(false);
  const [extinguisherValue, setExtinguisherValue] = useState(extinguisher);
  const [priceValue, setPriceValue] = useState(price);
  const [imageValue, setImageValue] = useState(image);

  const [initialValues, setInitialValues] = useState({
    title: "",
    price: "",
    image: "",
  });

  // Función para cargar los valores iniciales desde el estado
  const loadInitialValues = () => {
    setInitialValues({
      extinguisher: extinguisherValue,
      price: priceValue,
      image: imageValue,
    });
  };

  // Función para restablecer los campos a sus valores iniciales
  const resetFields = () => {
    setExtinguisherValue(initialValues.title);
    setPriceValue(initialValues.price);
    setImageValue(initialValues.image);
  };

  const editCurso = () => {
    // console.log("id: ", _id);
    let data = {
      extinguisher: extinguisherValue,
      price: priceValue,
      image: imageValue,
    };

    axios
      .put(apiUrl + `/extintor/${_id}`, data, headers())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Extintor Editado!!",
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
          title: "Error al Editar el extintor",
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
              Editar Extintor
            </h3>
            <div>
              <div className="flex w-72 flex-col gap-6 mx-auto items-center">
                <Input
                  color="blue"
                  label="Nombre del Extintor"
                  value={extinguisherValue}
                  onChange={(e) => setExtinguisherValue(e.target.value)}
                />
                <Input
                  color="purple"
                  label="Imagen"
                  type="text"
                  value={imageValue}
                  onChange={(e) => setImageValue(e.target.value)}
                />
                <Input
                  color="blue"
                  label="Valor $ "
                  value={priceValue}
                  onChange={(e) => setPriceValue(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full flex justify-around">
              <Button pill onClick={() => editCurso(_id)}>
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

ModalEditExtintores.propTypes = {
  _id: PropTypes.string.isRequired,
  extinguisher: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
