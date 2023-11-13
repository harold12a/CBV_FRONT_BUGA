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
      <div className="md:grid md:grid-rows-3 md:grid-flow-col md:gap-4  md:mx-3 xl:mx-[10%] xl:grid-rows-2 ">
        <Anchor to="/noticias_crud">
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
        <Anchor to="/curso">
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
        <Anchor to="/capacitacion">
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
        <Anchor to="/extintor">
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
        <Anchor to="/psicologia_crud">
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
      </div>
    </>
  );
};

export default Buttons;
