import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import PropTypes from "prop-types";
export const PostView = ({ title, image, description, date }) => {
  const formattedDate = new Date(date).toLocaleString("es-ES", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return (
    <>
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
            <Typography variant="h5" color="blue-gray" className="font-medium">
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
        <CardFooter className="pt-3"></CardFooter>
      </Card>
    </>
  );
};

PostView.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
