import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Button } from "@mui/material";
import { Link as Anchor } from "react-router-dom";
import PropTypes from "prop-types";

export const TrainingCard = ({ _id, title, date, image }) => {
  const formattedDate = new Date(date).toLocaleString("es-ES", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return (
    <>
      <Card className="w-full max-w-[23.5rem] shadow-lg">
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
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {title}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            ></Typography>
          </div>
          <Typography color="gray">Inicio de capacitacion</Typography>
          <Typography color="gray">{formattedDate}</Typography>
        </CardBody>
        <CardFooter className="pt-3">
          <Anchor to={`/capacitaciones/${_id}`}>
            <Button variant="contained" size="lg" fullWidth={true}>
              Mas Informacion
            </Button>
          </Anchor>
        </CardFooter>
      </Card>
    </>
  );
};

TrainingCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  timeofTraining: PropTypes.string.isRequired,
};
