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
      <Blockquote className="bg-black text-white xl:block hidden ">
        <div className="mx-8">
          Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your.
        </div>
      </Blockquote>
      <Blockquote className="bg-black text-white xl:hidden block ">
        <div className="text-center">Flowbite is just awesome</div>
      </Blockquote>
      <div className="flex justify-center mt-2 ">
        <img
          src="/public/images/BannerNavabar.png"
          alt="banner del navegador"
          className="w-9/12 "
        />
      </div>
      <div className="border border-black   my-4 mr-[12.5%]  ml-[12.5%]"></div>
      <Navbar fluid rounded className=" md:flex md:justify-center">
        <Navbar.Brand>
          <Anchor to="/" className="flex items-center ">
            {/* <HiHome className="text-4xl mr-4  md:hidden xl:block" /> */}
          </Anchor>
        </Navbar.Brand>
        {user_id ? (
          <>
            <div className="flex md:order-2 ml-[45%]">
              <Dropdown
                arrowIcon={false}
                inline
                label={<Avatar alt="User settings" img={photo} rounded />}
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
        <Navbar.Collapse>
          {/* <Navbar.Link href="#" active>
            Home
          </Navbar.Link> */}
          {options?.map((option, index) => (
            <Anchor
              onClick={option?.onClick}
              key={index}
              to={option?.to}
              className="block mb-3  md:mr-[-15px] "
            >
              {option?.title}
            </Anchor>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
