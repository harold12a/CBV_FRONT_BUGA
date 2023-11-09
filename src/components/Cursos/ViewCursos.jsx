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
import { CardCourse } from "../../pages/CardCourse";

export const ViewCursos = () => {
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
    </>
  );
};
