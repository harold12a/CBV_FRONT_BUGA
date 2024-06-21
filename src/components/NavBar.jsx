import { HiOutlineUserCircle } from "react-icons/hi";
import { Link as Anchor } from "react-router-dom";
import axios from "axios";
import apiUrl from "../api/apiUrl";
import headers from "../api/headers";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

import { Blockquote } from "flowbite-react";

const NavBar = () => {
  const signout = async () => {
    try {
      const result = await Swal.fire({
        title: "esta Seguro?",
        text: "¿Quiere salir de la Session?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "Cancel",
        didOpen: () => {
          const confirmButton = document.querySelector(".swal2-confirm");
          confirmButton.style.backgroundColor = "#2573F0";
          confirmButton.style.color = "white";
        },
      });

      if (result.isConfirmed) {
        await axios.put(apiUrl + "/auth/singout", null, headers());
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.replace("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: " Error",
        text: "Error al cerrar la Session..",
      });
    }
  };

  const [options, setOptions] = useState([
    { to: "/", title: "Inicio" },
    { to: "/noticias", title: "Noticias" },
    { to: "/cursos", title: "Cursos" },
    { to: "/extintores", title: "Extintores" },
    { to: "/capacitaciones", title: "Capacitaciones" },
    { to: "/ambulancia", title: "Ambulancia" },
    { to: "/inspeccion", title: "Inspecciones" },
    { to: "/psicologia", title: "Salud Mental" },
    // { to: "/register", title: "Registrarse" },
    { to: "/ingresar", title: "Ingresar" },
  ]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);
    if (user?.role === 1) {
      setOptions([
        { to: "/", title: "Inicio" },
        { to: "/botones", title: "Panel de Administracion" },
      ]);
    } else {
      setOptions([
        { to: "/", title: "Inicio" },
        { to: "/noticias", title: "Noticias" },
        { to: "/cursos", title: "Cursos" },
        { to: "/extintores", title: "Extintores" },
        { to: "/capacitaciones", title: "Capacitaciones" },
        { to: "/ambulancia", title: "Ambulancia" },
        { to: "/inspeccion", title: "Inspecciones" },
        { to: "/psicologia", title: "Salud Mental" },
        // { to: "/register", title: "Registrase" },
        { to: "/ingresar", title: "Ingresar" },
      ]);
    }
  }, []);
  let user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  let email = user?.email;
  let photo = user?.photo;
  let user_id = user?._id;
  return (
    <>
      <Blockquote className="bg-cyan-500 text-white xl:block hidden  ">
        
        <div className="flex items-center  mx-2  pb-2 pt-2 ">
          <img src="/public/images/LOGO.png" alt="img-logo-bomberos" className="w-10 "  />
     <span className="flex-grow text-center text-base">
     Cuerpo de Bomberos Voluntario de la Ciudad de Buga /  2366891 - 2366892 - 2366893 / calle 2 sur Nº 10-72 
     </span>
    
    
       
       
        </div>
      </Blockquote>
      <Blockquote className="bg-cyan-500 text-white xl:hidden block ">
        <div className="text-center text-base">Cuerpo de Bomberos Voluntario de la Ciudad de Buga /  2366891 - 2366892 - 2366893 / calle 2 sur Nº 10-72 </div>
      </Blockquote>
      {/* <div className="flex justify-center mt-2 ">
        <img
          src="/public/images/HONOR.png"
          alt="banner del navegador"
          className="w-[65%]"
        />
      </div> */}

      {/* <div className="border border-black   my-4 mr-[12.5%]  ml-[12.5%]"></div> */}
      <Navbar fluid rounded className=" md:flex md:justify-center">
        <Navbar.Brand>
          <Anchor to="/" className="flex items-center ">
          </Anchor>
        </Navbar.Brand>
        {user_id ? (
          <>
            <div className="flex md:order-2 mr-[75%] xl:mr-0">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img={photo}
                    rounded
                    className="xl:ml-96"
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Usuario</span>
                  <span className="block truncate text-sm font-medium">
                    {email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item onClick={signout}>
                  Salir del panel de Administracion{" "}
                </Dropdown.Item>
              </Dropdown>
            </div>
          </>
        ) : (
          <div className="flex md:order-2  ">
            <Anchor to="/ingresar">
              <HiOutlineUserCircle className="text-4xl ml-[260px] xl:ml-0 md:hidden " />
            </Anchor>
          </div>
        )}
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
   

        <Navbar.Collapse >
          {options?.map((option, index) => (
            <Anchor
              onClick={option?.onClick}
              key={index}
              to={option?.to}
              className="block mb-3 text-[18px] md:mr-[-15px] hover:text-cyan-500   "
            >
              {option?.title}
            </Anchor>
          ))}
        </Navbar.Collapse>
      </Navbar>
      <div className="border-4 border-cyan-500  mt-2 my-4 mr-[12.5%]  ml-[12.5%] xl:block hidden"></div>
    </>
  );
};

export default NavBar;
