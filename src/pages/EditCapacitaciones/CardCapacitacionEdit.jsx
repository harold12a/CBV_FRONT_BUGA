import { Typography } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import required modules
import { Pagination } from "swiper/modules";
import axios from "axios";
import apiUrl from "../../api/apiUrl";
import headers from "../../api/headers";
import { useEffect, useState } from "react";
// import { Link as Anchor } from "react-router-dom";
import { CardViewEdit } from "./CardViewEdit";
export const CardCapacitacionEdit = () => {
  const [training, setTraining] = useState([]);
  //   console.log("training", training);
  useEffect(() => {
    try {
      axios.get(apiUrl + "/capacitaciones", headers()).then((res) => {
        setTraining(res.data.response);
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
        Capacitaciones
      </Typography>
      <div className="border-t-2 border-gray-400 w-80 my-4"></div>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[70vh]"
      >
        {training.map((each) => (
          <SwiperSlide
            key={each._id.toString()}
            className="bg-white border-8 border-white drop-shadow-2xl rounded-2xl  mb-[-2.2vh]  "
          >
            <CardViewEdit
              _id={each._id.toString()}
              title={each.title}
              date={each.date}
              description={each.description}
              image={each.image}
              price={each.price}
              timeofTraining={each.timeofTraining}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
