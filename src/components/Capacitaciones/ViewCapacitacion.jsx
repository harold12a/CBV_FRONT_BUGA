import { Typography } from "@material-tailwind/react";
import { Link as Anchor } from "react-router-dom";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
export const ViewCapacitacion = () => {
  return (
    <>
      <Typography
        variant="h5"
        className=" font-bold pl-2 mt-10 mb-4 flex justify-center md:text-[20px] "
      >
        Capacitaciones
      </Typography>
      <div className="flex justify-around">
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/public/images/capacitaciones.jpg"
        >
          <Anchor to={"/capacitaciones_vista"}>
            <div className="flex justify-center">
              <Button color="failure">Solicitar Capacitacion</Button>
            </div>
          </Anchor>
        </Card>
      </div>
    </>
  );
};
