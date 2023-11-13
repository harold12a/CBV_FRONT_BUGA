import {
  // Card,
  // CardHeader,
  // CardBody,
  Typography,
  // IconButton,
} from "@material-tailwind/react";
import { Button } from "@mui/material";
import { Link as Anchor } from "react-router-dom";
import PropTypes from "prop-types";
import { Card } from "flowbite-react";
import Container from "@mui/material/Container";

export const CardCourse = ({ _id, title, date, image }) => {
  // Formatear la fecha eliminando la parte "Z"
  const formattedDate = new Date(date).toLocaleString("es-ES", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return (
    <>
      <Container maxWidth="sm" className="xl:mt-[12%] md:mt-[2%]">
        <Card className="max-w-sm xl:uppercase" imgSrc={image} horizontal>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mt-[-5%]">
            <Typography color="gray" className="font-bold">
              Inicio de curso
            </Typography>
            <Typography color="gray">{formattedDate}</Typography>
            <Anchor to={`/course_vista/${_id}`}>
              <Button variant="contained" size="lg" fullWidth={true}>
                Mas Informacion
              </Button>
            </Anchor>
          </p>
        </Card>
      </Container>
    </>
  );
};

CardCourse.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
