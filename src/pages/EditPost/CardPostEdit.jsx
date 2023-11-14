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
import { CardViewEdit } from "./CardViewEdit";
import { Typography } from "@material-tailwind/react";
export const CardPostEdit = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    try {
      axios.get(apiUrl + "/post", headers()).then((res) => {
        setPost(res.data.response);
      });
    } catch (error) {
      error;
    }
  }, []);
  return (
    <>
      <Typography
        variant="h4"
        className=" font-bold pl-2 mt-4 text-center uppercase "
      >
        Panel para editar o eliminar un post
      </Typography>
      <div className="border-t-2 border-gray-400   my-4"></div>

      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[70vh] xl:h-[85vh]"
      >
        {post.map((each) => (
          <SwiperSlide
            key={each._id.toString()}
            className="rounded-2xl  mb-[2vh] xl:mx-[35%] xl:mt-4 "
          >
            <CardViewEdit
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
