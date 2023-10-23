import { Link as Anchor } from "react-router-dom";
import PropTypes from "prop-types";
// import { Button } from "@material-tailwind/react";
import { Button } from "flowbite-react";
import { Typography } from "@material-tailwind/react";

export const ExtinguisherView = ({ extinguisher, price, image }) => {
  // Formatear el precio como una cadena con separador de miles
  const formattedPrice = price.toLocaleString("es-ES", {
    style: "currency",
    currency: "COP", // Cambia a tu moneda si es diferente
    minimumFractionDigits: 3, // Número de decimales
  });

  return (
    <>
      <img
        className="h-64 w-[93%] rounded-[20%] object-cover object-center absolute mt-[28px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl"
        src={image}
        alt="nature image"
      />
      <div className="mt-[24vh]  ">
        <Typography
          variant="h5"
          className=" font-bold text-center"
        ></Typography>
        <h1 className="text-center"> {extinguisher}</h1>
        <Typography variant="h6" className=" font-bold mt-1 mb-4 text-center">
          $ {formattedPrice}
        </Typography>

        <Anchor
        //   to={`/noticias_vista/${_id}`}
        >
          <div className="flex justify-center ">
            <Button color="failure">Comprar</Button>
          </div>
        </Anchor>
      </div>
    </>
  );
};

ExtinguisherView.propTypes = {
  // _id: PropTypes.string.isRequired,
  extinguisher: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
