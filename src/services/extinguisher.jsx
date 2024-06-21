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
import { ExtinguisherView } from "./ExtinguisherView";

export const Extinguisher = () => {
  const [extinguisher, setExtinguisher] = useState([]);
  useEffect(() => {
    try {
      axios.get(apiUrl + "/extintor", headers()).then((res) => {
        setExtinguisher(res.data.response);
        // console.log(res.data.response);
      });
    } catch (error) {
      error;
      //   console.log(error);
    }
  }, []);
  return (
    <>
      <Typography variant="h5" className=" font-bold pl-2 mt-2 mb-4 ">
        Extintores
      </Typography>

      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <div className="mx-auto max-w-screen-xl px-4">
        <img
          className="h-96 w-full mb-7 rounded-lg object-cover  object-center shadow-xl shadow-blue-gray-900/50"
          src="/public/images/img7.jpeg"
          alt="nature image"
        />
      </div>
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
        {extinguisher.map((each) => (
          <SwiperSlide
            key={each._id.toString()}
            className="bg-gray-100 border-4 border-gray-800 drop-shadow-2xl rounded-2xl h-[40vh] w-[60vw] xl:w-[45vh] md:w-[38vh] md:mt-[24vh] mt-[14vh] xl:mb-[80px] mb-[30px] xl:mt-36  relative"
          >
            <ExtinguisherView
              _id={each._id.toString()}
              extinguisher={each.extinguisher}
              price={each.price}
              image={each.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="xl:hidden md:hidden block">
        <Typography variant="h5" className=" font-bold pl-2 mt-10 mb-4 ">
          Informacion
        </Typography>
        <div className="border-t-2 border-gray-400 w-80  my-4"></div>
        <div className="mt-2">
          <Typography variant="h5" className="pl-2 font-bold">
            Horaios de Atencion
          </Typography>
          <Typography variant="h6" className="pl-2 font-bold" color="gray">
            Lunes, Martes, Miercoles, Jueves y viernes
          </Typography>
          <Typography variant="h6" className="pl-2 font-bold">
            8:00 am - 12:00 pm / 2:00 pm - 6:00pm
          </Typography>
          <Typography variant="h6" className="pl-2 font-bold" color="gray">
            Sabados
          </Typography>
          <Typography variant="h6" className="pl-2 font-bold">
            8:00 am - 12:00 pm
          </Typography>
          <Typography variant="h6" className="pl-2 font-bold" color="gray">
            Domingos
          </Typography>
          <Typography variant="h6" className="pl-2 font-bold">
            24 horas - Guardia
          </Typography>
        </div>
        <Typography variant="h5" className=" font-bold pl-2 mt-4 mb-4 ">
          Contacto
        </Typography>
        <div className="border-t-2 border-gray-400 w-80  my-4"></div>
        <div className="mt-2">
          <Typography variant="h6" className="pl-2 font-bold " color="gray">
            Telefono: 123456789
          </Typography>
          <Typography variant="h6" className="pl-2 font-bold" color="gray">
            WhatsApp: 12345678
          </Typography>
        </div>
      </div>
    </>
  );
};
