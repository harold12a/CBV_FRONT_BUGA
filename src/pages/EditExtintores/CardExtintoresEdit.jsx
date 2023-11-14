import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import required modules
import { Pagination } from "swiper/modules";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import apiUrl from "../../api/apiUrl";
import headers from "../../api/headers";
import { useEffect, useState } from "react";
import { CardViewEdit } from "./CardViewEdit";

export const CardExtintoresEdit = () => {
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
      <Typography
        variant="h4"
        className=" font-bold pl-2 mt-4 text-center uppercase "
      >
        Panel para editar o eliminar un extintor
      </Typography>
      <div className="border-t-2 border-gray-400   my-4"></div>

      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="xl:h-[75vh]"
      >
        {extinguisher.map((each) => (
          <SwiperSlide
            key={each._id.toString()}
            className="bg-gray-100 border-4 border-gray-800 drop-shadow-2xl rounded-xl h-[45vh] md:h-[42vh] xl:h-[48vh] w-[60vw] xl:w-[45vh] md:w-[38vh] md:mt-[24vh] mt-[14vh] xl:mb-[80px] mb-[30px] xl:mt-36  relative"
          >
            <CardViewEdit
              _id={each._id.toString()}
              extinguisher={each.extinguisher}
              price={each.price}
              image={each.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
