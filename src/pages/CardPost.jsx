// import { MdOutlinePhoneIphone } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import required modules
import { Pagination } from "swiper/modules";
import axios from "axios";
import apiUrl from "../api/apiUrl";
import headers from "../api/headers";
import { useEffect, useState } from "react";
import { PostView } from "./PostView";
import { Typography } from "@material-tailwind/react";
export const CardPost = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    try {
      axios.get(apiUrl + "/post", headers()).then((res) => {
        setPost(res.data.response);
        // console.log(res.data.response);
      });
    } catch (error) {
      error;
      // console.log(error);
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
            <PostView
              title={each.title}
              date={each.date}
              description={each.description}
              image={each.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <h1 className="text-xl pl-2 mt-2 font-bold uppercase text-center">
        Contacto
      </h1>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <div className="mt-2">
        <Typography variant="h5" className="ml-6 font-bold">
          Telefono
        </Typography>
        <Typography variant="h6" className="ml-7 font-bold" color="gray">
          3117435713
        </Typography>
        <Typography variant="h5" className="ml-6 font-bold">
          Email
        </Typography>
        <Typography variant="h6" className="ml-7 font-bold" color="gray">
          jessica@gmail.com
        </Typography>
      </div>
    </>
  );
};
