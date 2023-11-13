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
import { Card } from "flowbite-react";
import Container from "@mui/material/Container";
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
      <div className="flex xl:justify-between mt-2">
        <div className="xl:block md:block hidden mt-36 ml-10 ">
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Arthur Schopenhauer
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              La felicidad nunca reside en posesiones, en dinero o en el
              reconocimiento mundano. La verdadera dicha proviene de la
              sabiduría interior y la renuncia a los deseos sin fin.
            </p>
          </Card>
        </div>
        <Container maxWidth="lg">
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
                className=" xl:bg-blue-gray-300 rounded-lg  xl:ml-48 "
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
        </Container>
      </div>
    </>
  );
};
