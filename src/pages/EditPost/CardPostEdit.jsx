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
      <h1 className="text-xl pl-2 mt-2 font-bold uppercase text-center">
        Psicologia
      </h1>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>

      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[70vh]"
      >
        {post.map((each) => (
          <SwiperSlide
            key={each._id.toString()}
            className="bg-white border-8 border-white drop-shadow-2xl rounded-2xl  mb-[0vh]  "
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
