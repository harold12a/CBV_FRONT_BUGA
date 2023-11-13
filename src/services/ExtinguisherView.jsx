import { Link as Anchor } from "react-router-dom";
import PropTypes from "prop-types";
// import { Button } from "@material-tailwind/react";
import { Button } from "flowbite-react";
import { Typography } from "@material-tailwind/react";

export const ExtinguisherView = ({ extinguisher, price, image }) => {
  // Formatear el precio como una cadena con separador de miles
  let formattedPrice = price;
  if (price !== null && typeof price === "number") {
    // Formatear el precio como una cadena con separador de miles
    formattedPrice = price.toLocaleString("es-CO", {
      minimumFractionDigits: 3,
    });
  }

  return (
    <>
      <img
        className=" xl:h-80 h-68 w-[93%] object-contain  rounded-full md:rounded-lg xl:rounded-lg  object-center absolute mt-[28px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src={image}
        alt="nature image"
      />
      <div className="mt-[23vh] xl:mt-[26vh] md:mt-[27vh]  ">
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
    </>
  );
};

ExtinguisherView.propTypes = {
  // _id: PropTypes.string.isRequired,
  extinguisher: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
