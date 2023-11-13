import { MdOutlinePhoneIphone } from "react-icons/md";
// import required modules
import { Typography } from "@material-tailwind/react";
import { ViewNoticia } from "./Noticias/ViewNoticia";
import { ViewCursos } from "./Cursos/ViewCursos";
import { ViewComponent } from "./Psicologia/ViewComponent";
import { ViewCapacitacion } from "./Capacitaciones/ViewCapacitacion";
import { ViewExtintores } from "./Extintores/ViewExtintores";
import { ViewAmbulancia } from "./Ambulancia/ViewAmbulancia";
import { ViewInspeccion } from "./Inspeccion.jsx/ViewInspeccion";
import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";
import Container from "@mui/material/Container";

const Principal = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="xl:block hidden">
          <iframe
            className=" w-[600px] h-96 ml-4 rounded-lg  shadow-xl"
            src="https://www.youtube.com/embed/R-TNTVHvM3c"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="flex justify-center mt-[25%] drop-shadow-2xl">
            <Card
              className="max-w-sm"
              renderImage={() => (
                <img
                  width={500}
                  height={500}
                  src="/public/images/equipoBombero.jpg"
                  alt="image 1"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Sabe usted cuanto vale equipar a una unidad bomberil ?
              </h5>
            </Card>
          </div>
        </div>
        <img
          className="xl:object-none xl:object-right-top xl:h-[1096px] xl:w-full xl:mr-4  h-96 w-full  object-cover object-center md:object-cover md:h-auto md:w-full"
          src="/public/images/flame1.jpg"
          alt="nature image"
        />
      </div>

      <div className=" bg-white border-4 border-white drop-shadow-xl text-center text-m underline h-[6vh] mx-auto mt-[5vh] mb-3 flex  justify-center ">
        <MdOutlinePhoneIphone className="text-3xl  " />
        <h1 className="mt-1 font-mono  font-semibold text-xl">
          linea de emergencia 119
        </h1>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px] md:h-[500px]">
        <Carousel>
          <img src="/public/images/carousel1.jpg" alt="..." />
          <img src="/public/images/carouse2.jpg" alt="..." />
          <img src="/public/images/carouse3.jpg" alt="..." />
        </Carousel>
      </div>
      {/* <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 xl:h-[600px] xl:w-full overflow-hidden rounded-lg md:h-96">
          <div
            className="hidden duration-700 ease-in-out object-fill h-screen w-full "
            data-carousel-item
          >
            <img src="/public/images/carousel1.jpg" alt="..." />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/public/images/carouse2.jpg" alt="..." />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/public/images/carouse3.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/public/images/carouse4.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>

        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div> */}
      {/* Noticias */}
      <ViewNoticia />

      <div></div>
      {/* Cursos */}
      <ViewCursos />

      {/* Psicologia */}
      <ViewComponent />

      <Typography
        variant="h4"
        className="font-bold pl-4 mt-4 md:pl-8 md:text-[40px] "
      >
        Servicios
      </Typography>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <div className=" xl:flex xl:justify-around md:grid md:grid-cols-2 md:gap-2 ">
        {/* Extintores */}
        <Container maxWidth="sm">
          <ViewExtintores />
        </Container>

        {/* Capacitaciones */}
        <Container maxWidth="sm">
          <ViewCapacitacion />
        </Container>

        {/* Ambulancia */}
        <Container maxWidth="sm">
          <ViewAmbulancia />
        </Container>

        {/* Inspecciones */}
        <Container maxWidth="sm">
          <ViewInspeccion />
        </Container>
      </div>

      <div className="flex justify-center mt-10 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63690.244145155586!2d-76.29217369022544!3d3.887047383819724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbomberos%20buga!5e0!3m2!1ses!2sco!4v1696704166269!5m2!1ses!2sco"
          width="1000"
          height="300"
          className="border-0  rounded-lg "
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Principal;
