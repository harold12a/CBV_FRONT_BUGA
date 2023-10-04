import { Link as Anchor } from "react-router-dom";

const Buttons = () => {
  return (
    <>
      <div className="bg-white border-4 border-white drop-shadow-xl  h-[60vh] mx-5 mt-[8vh]  ">
        <div className=" mt-4 text-center  ">
          <Anchor
            to="/schema"
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-2xl text-md px-[78px] py-2.5 text-center mr-2 mb-2 "
          >
            Noticias
          </Anchor>
          <Anchor
            to="/schema"
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-2xl text-md px-[83px] py-2.5 text-center mr-2 mb-2 mt-2"
          >
            Cursos
          </Anchor>
          <Anchor
            to="/schema"
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-2xl text-md px-[53px] py-2.5 text-center mr-2 mb-2 mt-2"
          >
            Capacitaciones
          </Anchor>
          <Anchor
            to="/schema"
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-2xl text-md px-[70px] py-2.5 text-center mr-2 mb-2 mt-2"
          >
            Extintores
          </Anchor>
          <Anchor
            to="/schema"
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-2xl text-md px-[70px] py-2.5 text-center mr-2 mb-2 mt-2"
          >
            Psicólogia
          </Anchor>
          <Anchor
            to="/schema"
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-2xl text-md px-[70px] py-2.5 text-center mr-2 mb-2 mt-2"
          >
            Pendiente
          </Anchor>
        </div>
      </div>
    </>
  );
};

export default Buttons;
