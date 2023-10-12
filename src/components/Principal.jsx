import { MdOutlinePhoneIphone } from "react-icons/md";
// import { Link as Anchor } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Link as Anchor } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import required modules
import { Pagination } from "swiper/modules";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import axios from "axios";
import apiUrl from "../api/apiUrl";
import headers from "../api/headers";
import { useEffect, useState } from "react";
import { CardNoticias } from "../pages/CardNoticias";

const Principal = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    try {
      axios.get(apiUrl + "/noticias", headers()).then((res) => {
        setNoticias(res.data.response);
        console.log(res.data.response);
      });
    } catch (error) {
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
      <h1 className="text-xl pl-2 mt-2 font-bold">Noticias</h1>
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
      <h1 className="text-xl pl-2 mt-2 font-bold">Cursos</h1>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>

      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[70vh]"
      >
        <SwiperSlide className="bg-white border-8 border-white drop-shadow-2xl rounded-2xl   mt-[1vh] mb-[5vh]  ">
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img src="/public/images/curso1.webp" alt="ui/ux review check" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              <IconButton
                size="sm"
                color="red"
                variant="text"
                className="!absolute top-4 right-4 rounded-full"
              ></IconButton>
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium"
                >
                  Brigada contra incendios
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  4.8
                </Typography>
              </div>
              <Typography color="gray">Inicio de curso</Typography>
              <Typography color="gray">5/12-2023</Typography>
            </CardBody>
            <CardFooter className="pt-3">
              <Button size="lg" fullWidth={true}>
                Mas Informacion
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="bg-white border-8 border-white drop-shadow-2xl rounded-2xl   mt-[1vh] mb-[5vh]  ">
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img src="/public/images/curso1.webp" alt="ui/ux review check" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              <IconButton
                size="sm"
                color="red"
                variant="text"
                className="!absolute top-4 right-4 rounded-full"
              ></IconButton>
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium"
                >
                  Brigada contra incendios
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  4.8
                </Typography>
              </div>
              <Typography color="gray">Inicio de curso</Typography>
              <Typography color="gray">5/12-2023</Typography>
            </CardBody>
            <CardFooter className="pt-3">
              <Button size="lg" fullWidth={true}>
                Mas Informacion
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
      </Swiper>
      <h1 className="text-xl pl-2 mt-2 font-bold">Psicologia</h1>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <a
        href="#"
        className="flex  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-[75%] rounded-t-lg h-[55%] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="/public/images/jessica.jpg"
          alt="jessica-img"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Jessica Tatiana Betancourth
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Especialista en Atentcion Psicosocial
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Calular: 123456789
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            EMail: jessica@gmail.com
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            https://www.linkedin.com/search/results/
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Ver Mas
          </button>
        </div>
      </a>
      <h1 className="text-xl pl-2 mt-2 font-bold">Servicios</h1>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <h1 className="text-md pl-2 mt-2 mb-4 font-bold">Extintores</h1>
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full rounded-xl object-cover object-center"
          src="/public/images/extintores1.jpeg"
          alt="nature image"
        />
        <figcaption className="absolute bottom-8 left-[225px]  ">
          <button
            type="button"
            className="py-2.5 px-5 underline mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Comprar
          </button>
        </figcaption>
      </figure>
      <h1 className="text-md pl-2 mt-2 mb-4 font-bold">Capacitaciones</h1>
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full rounded-xl object-cover object-center"
          src="/public/images/capacitaciones.jpg"
          alt="nature image"
        />
        <figcaption className="absolute bottom-8 left-[225px]  ">
          <button
            type="button"
            className="py-2.5 px-5 underline mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Solicitar
          </button>
        </figcaption>
      </figure>
      <h1 className="text-md pl-2 mt-2 mb-4 font-bold">Ambulancia</h1>
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full rounded-xl object-cover object-center"
          src="/public/images/ambulancia.jpeg"
          alt="nature image"
        />
        <figcaption className="absolute bottom-8 left-[225px]  ">
          <button
            type="button"
            className="py-2.5 px-5 underline mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Solicitar
          </button>
        </figcaption>
      </figure>
      <h1 className="text-md pl-2 mt-2 mb-4 font-bold">Inspecciones</h1>
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full rounded-xl object-cover object-center"
          src="/public/images/inspeccion.jpg"
          alt="nature image"
        />
        <figcaption className="absolute bottom-8 left-[225px]  ">
          <button
            type="button"
            className="py-2.5 px-5 underline mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Solicitar
          </button>
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
