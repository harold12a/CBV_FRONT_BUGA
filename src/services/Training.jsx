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
// import { Link as Anchor } from "react-router-dom";
import { TrainingCard } from "./TrainingCard";
import { Card } from "flowbite-react";
import Container from "@mui/material/Container";
export const Training = () => {
  const [training, setTraining] = useState([]);
  // console.log("training", training);
  useEffect(() => {
    try {
      axios.get(apiUrl + "/capacitaciones", headers()).then((res) => {
        setTraining(res.data.response);
        // console.log(res.data.response);
      });
    } catch (error) {
      error;
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="xl:flex xl:justify-around hidden ">
        <iframe
          className=" w-[600px] h-96 ml-4 rounded-lg  shadow-xl"
          src="https://www.youtube.com/embed/dtjugqYZjfQ?si=xu5LI3dtu3DFJFIc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>{" "}
        <iframe
          className=" w-[600px] h-96 ml-4 rounded-lg  shadow-xl"
          src="https://www.youtube.com/embed/4nxdEYI7gIo?si=OY33vT46KAMieR9k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex xl:justify-between mt-10">
        <div className="xl:block md:block hidden mt-36 ml-10 ">
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Pasión por el Servicio
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              Descubre el héroe que llevas dentro. Con nuestro curso de
              bomberos, no solo adquirirás las habilidades necesarias para
              salvar vidas y proteger comunidades, sino que también
              desbloquearás tu propio potencial heroico.
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
            {training.map((each) => (
              <SwiperSlide
                key={each._id.toString()}
                className="  xl:bg-blue-gray-300 rounded-lg  xl:ml-48  "
              >
                <TrainingCard
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
        </Container>
      </div>
    </>
  );
};
