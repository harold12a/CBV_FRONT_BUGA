import { Typography } from "@material-tailwind/react";
import { Link as Anchor } from "react-router-dom";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
export const ViewInspeccion = () => {
  return (
    <>
      <Typography
        variant="h5"
        className=" font-bold pl-2 mt-10 mb-4 flex justify-center md:text-[20px] "
      >
        Inspecciones
      </Typography>
      <div className="flex justify-center">
        <Card
          className="max-w-sm "
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/public/images/inspeccion.jpg"
        >
          <Anchor to={"/servicios_inspecciones"}>
            <div className="flex justify-center">
              <Button color="failure">Solicitar Visita</Button>
            </div>
          </Anchor>
        </Card>
      </div>
    </>
  );
};
