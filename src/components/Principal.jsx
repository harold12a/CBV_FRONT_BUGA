import { MdOutlinePhoneIphone } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import required modules
import { Pagination } from "swiper/modules";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import apiUrl from "../api/apiUrl";
import headers from "../api/headers";
import { useEffect, useState } from "react";
import { CardNoticias } from "../pages/CardNoticias";
import { CardCourse } from "../pages/CardCourse";
import { Link as Anchor } from "react-router-dom";
import { Button } from "@mui/material";

const Principal = () => {
  const [noticias, setNoticias] = useState([]);
  const [courses, setCourses] = useState([]);

  // useEffect noticias
  useEffect(() => {
    try {
      axios.get(apiUrl + "/noticias", headers()).then((res) => {
        setNoticias(res.data.response);
        // console.log(res.data.response);
      });
    } catch (error) {
      error;
      console.log(error);
    }
  }, []);

  // useEffect cursos

  useEffect(() => {
    try {
      axios.get(apiUrl + "/cursos", headers()).then((res) => {
        setCourses(res.data.response);
        // console.log(res.data.response);
      });
    } catch (error) {
      error;
      console.log(error);
    }
  }, []);

  return (
    <>
      <img
        className="h-96 w-full  object-cover object-center"
        src="/public/images/flame1.jpg"
        alt="nature image"
      />

      <div className=" bg-white border-4 border-white drop-shadow-xl text-center text-m underline h-[6vh] mx-auto mt-[5vh] mb-3 flex  justify-center ">
        <MdOutlinePhoneIphone className="text-3xl  " />
        <h1 className="mt-1 font-mono  font-semibold text-xl">
          linea de emergencia 119
        </h1>
      </div>

      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
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
      </div>
      <Typography variant="h4" className=" font-bold pl-2 mt-4 ">
        Noticias
      </Typography>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      {/* Noticias */}
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {noticias.map((each) => (
          <SwiperSlide
            key={each._id.toString()}
            className="bg-white border-4 border-white drop-shadow-2xl rounded-2xl h-[45vh] w-[60vw] mt-[14vh] mb-[30px]  relative"
          >
            <CardNoticias
              _id={each._id.toString()}
              title={each.title}
              date={each.date}
              description={each.description}
              image={each.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Cursos */}
      <Typography variant="h4" className=" font-bold pl-2 mt-4 ">
        Cursos
      </Typography>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>

      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[70vh]"
      >
        {courses.map((each) => (
          <SwiperSlide
            key={each._id.toString()}
            className="bg-white border-8 border-white drop-shadow-2xl rounded-2xl  mb-[-3.8vh]  "
          >
            <CardCourse
              _id={each._id.toString()}
              title={each.title}
              date={each.date}
              description={each.description}
              image={each.image}
              price={each.price}
              timeofCurse={each.timeofCurse}
            />
          </SwiperSlide>
        ))}
      </Swiper>
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
      <Typography variant="h4" className=" font-bold pl-2 mt-4 ">
        Servicios
      </Typography>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <Typography variant="h5" className=" font-bold pl-2 mt-2 mb-4 ">
        Extintores
      </Typography>
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full rounded-xl object-cover object-center"
          src="/public/images/extintores1.jpeg"
          alt="nature image"
        />
        <figcaption className="absolute bottom-8 left-[225px]  ">
          <Anchor to={"/servicios_extintores"}>
            <button
              type="button"
              className="py-2.5 px-5 underline mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Comprar
            </button>
          </Anchor>
        </figcaption>
      </figure>
      <Typography variant="h5" className=" font-bold pl-2 mt-10 mb-4 ">
        Capacitaciones
      </Typography>
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full rounded-xl object-cover object-center"
          src="/public/images/capacitaciones.jpg"
          alt="nature image"
        />
        <figcaption className="absolute bottom-8 left-[225px]  ">
          <Anchor to={"/capacitaciones"}>
            <button
              type="button"
              className="py-2.5 px-5 underline mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Solicitar
            </button>
          </Anchor>
        </figcaption>
      </figure>
      <Typography variant="h5" className=" font-bold pl-2 mt-10 mb-4 ">
        Ambulancia
      </Typography>
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full rounded-xl object-cover object-center"
          src="/public/images/ambulancia.jpeg"
          alt="nature image"
        />
        <figcaption className="absolute bottom-8 left-[225px]  ">
          <Anchor to={"/servicios_ambulancia"}>
            <button
              type="button"
              className="py-2.5 px-5 underline mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Solicitar
            </button>
          </Anchor>
        </figcaption>
      </figure>
      <Typography variant="h5" className=" font-bold pl-2 mt-10 mb-4 ">
        Inspecciones
      </Typography>
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full rounded-xl object-cover object-center"
          src="/public/images/inspeccion.jpg"
          alt="nature image"
        />
        <figcaption className="absolute bottom-8 left-[225px]  ">
          <Anchor to={"/servicios_inspecciones"}>
            <button
              type="button"
              className="py-2.5 px-5 underline mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Solicitar
            </button>
          </Anchor>
        </figcaption>
      </figure>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63690.244145155586!2d-76.29217369022544!3d3.887047383819724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbomberos%20buga!5e0!3m2!1ses!2sco!4v1696704166269!5m2!1ses!2sco"
        width="400"
        height="300"
        className="border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Principal;
