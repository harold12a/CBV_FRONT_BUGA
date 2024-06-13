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

export const CardCourseEdit = () => {
  const [courses, setCourses] = useState([]);
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
      <Typography
        variant="h4"
        className=" font-bold pl-2 mt-4 text-center uppercase "
      >
        Panel para editar o eliminar un curso
      </Typography>
      <div className="border-t-2 border-gray-400  my-4 "></div>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[70vh] xl:h-[90vh]"
      >
        {courses.map((each) => (
          <SwiperSlide
            key={each._id.toString()}
            className="rounded-2xl  mb-[-2.2vh] xl:mx-[35%] xl:mt-4 "
          >
            <CardViewEdit
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
    </>
  );
};
