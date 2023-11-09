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
import { CardNoticias } from "../../pages/CardNoticias";
export const ViewNoticia = () => {
  const [noticias, setNoticias] = useState([]);

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
  return (
    <>
      <Typography variant="h4" className=" font-bold pl-2 mt-4 ">
        Noticias
      </Typography>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
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
    </>
  );
};
