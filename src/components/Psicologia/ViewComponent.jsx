import { Typography } from "@material-tailwind/react";
import { Link as Anchor } from "react-router-dom";
import { Button } from "@mui/material";
import { Card } from "flowbite-react";

// import Container from "@mui/material/Container";

export const ViewComponent = () => {
  return (
    <>
    <Typography
        variant="h4"
        className=" font-bold pl-4 mt-4 md:pl-8 md:text-[20px] "
      >
      Psicologia
      </Typography>
      <Typography
        variant="h6"
        className="  md:pl-8 xl:block hidden   "
      >
      La capacitación en psicología de la emergencia es esencial para proporcionar
      apoyo emocional y psicológico a las víctimas y a los primeros respondedores durante y después de un incidente crítico.
       Este conocimiento ayuda a reducir el impacto del trauma, facilita la recuperación emocional y fortalece
        la capacidad de enfrentar situaciones de alta tensión. Comprender y aplicar técnicas de 
        intervención psicológica en emergencias es crucial para promover la resiliencia y el bienestar mental en tiempos de crisis.
      </Typography>
    

      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <div className="flex xl:justify-around md:justify-center mt-4">
        <Card
          className="max-w-sm"
          imgSrc="/public/images/jessica.jpg"
          horizontal
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Jessica Tatiana Betancourth
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Especialista en Atentcion Psicosocial
          </p>
          <Anchor to={"/post_view"}>
            <Button
              variant="contained"
              size="lg"
              fullWidth={true}
              className="mb-3"
            >
              Ver mas
            </Button>
          </Anchor>
        </Card>
        <div className="xl:block  hidden  ">
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            ¿Por qué es importante la psicología de emergencias en la gestión de crisis?
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
           
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};
