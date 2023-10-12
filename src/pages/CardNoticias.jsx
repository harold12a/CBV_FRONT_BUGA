import { Link as Anchor } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";

export const CardNoticias = ({ _id, title, date, image }) => {
  // Formatear la fecha eliminando la parte "Z"
  const formattedDate = new Date(date).toLocaleString("es-ES", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return (
    <>
      <img
        className="h-64 w-[93%] rounded-full object-cover object-center absolute mt-[28px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src={image}
        alt="nature image"
      />
      <div className="mt-[23vh]">
        <h1 className="text-center"> {title}</h1>
        <p className="mt-1 mb-4 text-center">{formattedDate}</p>
        <Anchor
          to={`/noticias_vista/${_id}`}
          className=" text-sm px-5 py-2.5 ml-[15px] mb-2"
        >
          <Button>Ver Mas</Button>
        </Anchor>
      </div>
    </>
  );
};

CardNoticias.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
