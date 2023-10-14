import { Link as Anchor } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { HiOutlineUserAdd } from "react-icons/hi";

const Buttons = () => {
  return (
    <>
      <h1 className="text-2xl pl-2 mt-2 font-bold">
        Botones de administracion
      </h1>
      <div className="border-t-2 border-gray-400   my-4"></div>
      <Anchor to="/noticias">
        <Card className="mt-6 w-96 drop-shadow-2xl ">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 flex text-[30px] "
            >
              <HiOutlineUserAdd className="text-[70px]" />
              Agregar Nueva Noticia
            </Typography>
            <Typography className="font-bold">
              Lorem ipsum dolor sit amet, consectetur sit amet, consectetur .
            </Typography>
          </CardBody>
          <CardFooter className="pt-0"></CardFooter>
        </Card>
      </Anchor>
      <Anchor to="/schema">
        <Card className="mt-6 w-96 drop-shadow-2xl ">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 flex text-[30px] "
            >
              <HiOutlineUserAdd className="text-[70px]" />
              Agregar Nuevo Curso
            </Typography>
            <Typography className="font-bold">
              Lorem ipsum dolor sit amet, consectetur sit amet, consectetur .
            </Typography>
          </CardBody>
          <CardFooter className="pt-0"></CardFooter>
        </Card>
      </Anchor>
      <Anchor to="/schema">
        <Card className="mt-6 w-96 drop-shadow-2xl ">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 flex text-[30px] "
            >
              <HiOutlineUserAdd className="text-[70px]" />
              Agregar Nueva Capacitacion
            </Typography>
            <Typography className="font-bold">
              Lorem ipsum dolor sit amet, consectetur sit amet, consectetur .
            </Typography>
          </CardBody>
          <CardFooter className="pt-0"></CardFooter>
        </Card>
      </Anchor>
      <Anchor to="/schema">
        <Card className="mt-6 w-96 drop-shadow-2xl ">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 flex text-[30px] "
            >
              <HiOutlineUserAdd className="text-[70px]" />
              Agregar Nuevos Extintores
            </Typography>
            <Typography className="font-bold">
              Lorem ipsum dolor sit amet, consectetur sit amet, consectetur .
            </Typography>
          </CardBody>
          <CardFooter className="pt-0"></CardFooter>
        </Card>
      </Anchor>
      <Anchor to="/schema">
        <Card className="mt-6 w-96 drop-shadow-2xl ">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 flex text-[30px] "
            >
              <HiOutlineUserAdd className="text-[70px]" />
              Agregar Nuevo Post
            </Typography>
            <Typography className="font-bold">
              Lorem ipsum dolor sit amet, consectetur sit amet, consectetur .
            </Typography>
          </CardBody>
          <CardFooter className="pt-0"></CardFooter>
        </Card>
      </Anchor>
    </>
  );
};

export default Buttons;
