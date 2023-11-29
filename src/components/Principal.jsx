import { MdOutlinePhoneIphone } from "react-icons/md";
// import required modules
import { Typography } from "@material-tailwind/react";
import { ViewNoticia } from "./Noticias/ViewNoticia";
import { ViewCursos } from "./Cursos/ViewCursos";
import { ViewComponent } from "./Psicologia/ViewComponent";
import { ViewCapacitacion } from "./Capacitaciones/ViewCapacitacion";
import { ViewExtintores } from "./Extintores/ViewExtintores";
import { ViewAmbulancia } from "./Ambulancia/ViewAmbulancia";
import { ViewInspeccion } from "./Inspeccion.jsx/ViewInspeccion";
import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { RiWhatsappLine } from "react-icons/ri";
//Modal
import { Button, Modal } from "flowbite-react";
import { Avatar } from "flowbite-react";
const Principal = () => {
  const [showButton, setShowButton] = useState(false);
  // Modal
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    // Agrega un evento de desplazamiento para controlar la visibilidad del botón
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setShowButton(scrollPosition > 50); // Ajusta el umbral según tus necesidades
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative">
        {/* Botón de WhatsApp flotante */}
        {showButton && (
          <div className="fixed bottom-8 right-8 bg-green-500 rounded-full p-4 shadow-md z-10 mb-[40px]">
            <a
              href="https://api.whatsapp.com/send?phone=3117435713&text=%C2%A1Hola%21%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20 información de%20.%20%F0%9F%98%8A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="text-white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <RiWhatsappLine className="text-2xl" />
              </svg>
            </a>
          </div>
        )}
      </div>
      {/* Video */}
      <div className="flex justify-between">
        <div className="xl:block hidden">
          <iframe
            className=" w-[600px] h-96 ml-4 rounded-lg  shadow-xl"
            src="https://www.youtube.com/embed/5bUH7luoUx0?si=3omgPB7ObpfkfLrw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="flex justify-center mt-[25%] drop-shadow-2xl">
            <Card
              className="max-w-sm"
              renderImage={() => (
                <img
                  width={500}
                  height={500}
                  src="/public/images/equipoBombero.jpg"
                  alt="image 1"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Sabe usted cuanto vale equipar a una unidad bomberil ?
              </h5>
              <Button onClick={() => setOpenModal(true)}>Ver</Button>
              <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Equipo de Bombero</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      The European Union’s General Data Protection Regulation
                      (G.D.P.R.) goes into effect on May 25 and is meant to
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them.
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Body></Modal.Body>
              </Modal>
            </Card>
          </div>
        </div>
        <img
          className="xl:object-none xl:object-right-top xl:h-[1096px] xl:w-full xl:mr-4  h-96 w-full  object-cover object-center md:object-cover md:h-auto md:w-full"
          src="/public/images/flame1.jpg"
          alt="nature image"
        />
      </div>

      <div className=" bg-white border-4 border-white drop-shadow-xl text-center text-m underline h-[6vh] mx-auto mt-[5vh] mb-3 flex  justify-center ">
        <MdOutlinePhoneIphone className="text-3xl  " />
        <h1 className="mt-1 font-mono  font-semibold text-xl">
          linea de emergencia 119
        </h1>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px] md:h-[500px]">
        <Carousel>
          <img src="/public/images/carousel1.jpg" alt="..." />
          <img src="/public/images/carouse2.jpg" alt="..." />
          <img src="/public/images/carouse3.jpg" alt="..." />
        </Carousel>
      </div>

      {/* Noticias */}
      <ViewNoticia />

      <div></div>
      {/* Cursos */}
      <ViewCursos />

      {/* Psicologia */}
      <ViewComponent />

      <Typography
        variant="h4"
        className="font-bold pl-4 mt-[85px] md:pl-8 md:text-[30px] "
      >
        Servicios
      </Typography>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <div className=" xl:flex xl:justify-around md:grid md:grid-cols-2 md:gap-2 ">
        {/* Extintores */}
        <Container maxWidth="sm">
          <ViewExtintores />
        </Container>

        {/* Capacitaciones */}
        <Container maxWidth="sm">
          <ViewCapacitacion />
        </Container>

        {/* Ambulancia */}
        <Container maxWidth="sm">
          <ViewAmbulancia />
        </Container>

        {/* Inspecciones */}
        <Container maxWidth="sm">
          <ViewInspeccion />
        </Container>
      </div>
      {/* Mapa */}
      <div className="flex justify-center mt-10 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63690.244145155586!2d-76.29217369022544!3d3.887047383819724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbomberos%20buga!5e0!3m2!1ses!2sco!4v1696704166269!5m2!1ses!2sco"
          width="1000"
          height="400"
          className="border-0  rounded-lg "
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* unidades */}
      <div className="bg-gray-200 pb-8 mx-4 ">
        <Typography
          variant="h4"
          className="font-bold pl-4 mt-[85px] md:pl-8 md:text-[30px] flex justify-center uppercase "
        >
          texto
        </Typography>
        <div className="flex flex-wrap items-center gap-4 mt-4 justify-center  ">
          <Avatar img="/public/images/haroldAlzate.jpg" size="xl" rounded>
            <div className="space-y-1 font-medium dark:text-white ">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </Avatar>
          <Avatar img="/public/images/andresAlzate.jpg" size="xl" rounded>
            <div className="space-y-1 font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </Avatar>
          <Avatar
            className="object-scale-down "
            img="/public/images/andresAlzate.jpg"
            size="xl"
            rounded
          >
            <div className="space-y-1 font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </Avatar>
          <Avatar img="/public/images/andresAlzate.jpg" size="xl" rounded>
            <div className="space-y-1 font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </Avatar>
          <Avatar img="/public/images/andresAlzate.jpg" size="xl" rounded>
            <div className="space-y-1 font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </Avatar>
          <Avatar img="/public/images/andresAlzate.jpg" size="xl" rounded>
            <div className="space-y-1 font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </Avatar>
          <Avatar img="/public/images/andresAlzate.jpg" size="xl" rounded>
            <div className="space-y-1 font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </Avatar>
          <Avatar img="/public/images/andresAlzate.jpg" size="xl" rounded>
            <div className="space-y-1 font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default Principal;
