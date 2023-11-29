import { Typography } from "@material-tailwind/react";
import { Link as Anchor } from "react-router-dom";
import { Button } from "@mui/material";
import { Card } from "flowbite-react";

// import Container from "@mui/material/Container";

export const ViewComponent = () => {
  return (
    <>
      <div className="flex justify-center xl:justify-start ">
        <Typography
          variant="h4"
          className=" font-bold pl-4 mt-4 md:pl-8 md:text-[30px] "
        >
          Psicologia
        </Typography>
      </div>

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
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};
