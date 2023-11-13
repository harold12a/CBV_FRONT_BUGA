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
        className=" font-bold pl-4 mt-4 md:pl-8 md:text-[40px] "
      >
        Cursos
      </Typography>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      {/* pendiente este div para acomodar */}
      <div className="flex xl:justify-around ">
        <div className="xl:block md:block hidden xl:ml-[100px] ">
          <Container maxWidth="sm">
            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title>
                  Sabe usted la importancia de capacitarse?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to&nbsp;
                    <a
                      href="https://flowbite.com/docs/getting-started/introduction/"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      get started&nbsp;
                    </a>
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  Is there a Figma file available?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out the
                    <a
                      href="https://flowbite.com/figma/"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Figma design system
                    </a>
                    based on the utility classes from Tailwind CSS and
                    components from Flowbite.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  What are the differences between Flowbite and Tailwind UI?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more about these technologies:
                  </p>
                  <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                    <li>
                      <a
                        href="https://flowbite.com/pro/"
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/"
                        rel="nofollow"
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
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
