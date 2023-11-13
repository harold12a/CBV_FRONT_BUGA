import { Typography } from "@material-tailwind/react";
import { Link as Anchor } from "react-router-dom";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
export const ViewInspeccion = () => {
  return (
    <>
      <Typography variant="h5" className=" font-bold pl-2 mt-10 mb-4 ">
        Inspecciones
      </Typography>

      <Card
        className="max-w-sm "
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/public/images/inspeccion.jpg"
      >
        <Anchor to={"/servicios_inspecciones"}>
          <div className="flex justify-center">
            <Button color="failure">Solicitar</Button>
          </div>
        </Anchor>
      </Card>
    </>
  );
};
