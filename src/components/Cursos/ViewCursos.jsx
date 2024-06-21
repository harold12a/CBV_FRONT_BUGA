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
import { Accordion } from "flowbite-react";
import Container from "@mui/material/Container";

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
      <Typography
        variant="h4"
        className=" font-bold pl-4 mt-4 md:pl-8 md:text-[20px] "
      >
       Cursos y Capacitaciones
      </Typography>
      <Typography
        variant="h6"
        className="  md:pl-8 xl:block hidden   "
      >
      Mantente atento a nuestros cursos y capacitaciones. Ofrecemos una variedad de programas diseñados para mejorar
       tus habilidades y conocimientos en gestión de emergencias, primeros auxilios, y prevención de desastres. 
       No te pierdas las oportunidades de aprendizaje que ofrecemos regularmente. 
       ¡Inscríbete y prepárate para estar listo ante cualquier situación!
      </Typography>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      {/* pendiente este div para acomodar */}
      <div className="flex xl:justify-around ">
        <div className="xl:block md:block hidden xl:ml-[100px] ">
          <Container maxWidth="sm">
            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title>
                ¿Sabe usted la importancia de capacitarse en primeros auxilios?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                  En situaciones de emergencia, los primeros minutos son cruciales.
                   La capacitación en primeros auxilios permite a las personas actuar de manera 
                   rápida y efectiva para salvar vidas y reducir la gravedad de
                    las lesiones antes de que lleguen los servicios de emergencia.
                  </p>
               
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                ¿Conoce los beneficios de estar preparado para desastres naturales?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                  La formación en gestión de desastres naturales no solo protege a su familia 
                  y a usted mismo, sino que también fortalece la resiliencia de su comunidad. 
                  Estar preparado reduce el pánico y mejora la respuesta organizada ante eventos como terremotos, inundaciones y huracanes.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                ¿Entiende la relevancia de la capacitación en prevención de incendios?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Aprender sobre la prevención y manejo de incendios puede significar
                   la diferencia entre la vida y la muerte. La capacitación adecuada enseña a identificar 
                   riesgos potenciales, utilizar extintores y evacuar edificios de manera segura, minimizando el daño a personas y propiedades.
                  </p>
                
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </Container>
        </div>
        <Container maxWidth="sm">
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="h-[75vh] xl:h-[50vh] md:h-[35vh]"
          >
            {courses.map((each) => (
              <SwiperSlide
                key={each._id.toString()}
                className=" border-white rounded-md "
                // className="mb-10"
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
        </Container>
      </div>
    </>
  );
};
