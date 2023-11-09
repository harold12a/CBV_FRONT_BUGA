import { Typography } from "@material-tailwind/react";
import { Link as Anchor } from "react-router-dom";
import { Button } from "@mui/material";

export const ViewComponent = () => {
  return (
    <>
      <Typography variant="h4" className=" font-bold pl-2 mt-4 ">
        Psicologia
      </Typography>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <a
        href="#"
        className="flex  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-[75%] rounded-t-lg h-[55%] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg mt-4"
          src="/public/images/jessica.jpg"
          alt="jessica-img"
        />
        <div className="flex flex-col mt-4 text-center">
          <Typography variant="h4" className=" font-bold">
            Jessica Tatiana Betancourth
          </Typography>
          <Typography variant="h6" className=" font-bold mb-4" color="gray">
            Especialista en Atentcion Psicosocial
          </Typography>
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
        </div>
      </a>
    </>
  );
};
