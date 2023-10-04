import { Link as Anchor } from "react-router-dom";
import { useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import apiUrl from "../api/apiUrl";
import Swal from "sweetalert2";

const SindIn = () => {
  const email = useRef();
  const password = useRef();

  const singin = async (e) => {
    e.preventDefault();
    let data = {
      email: email.current.value?.trim(),
      password: password.current.value?.trim(),
    };
    console.log(data);

    try {
      let user = await axios.post(apiUrl + "/auth/signin", data);
      if (user) {
        localStorage.setItem("token", user.data.response.token);
        localStorage.setItem("user", JSON.stringify(user.data.response.user));
      }
      Swal.fire({
        icon: "success",
        text: " !! Bienvenido !!",
        timer: 2500,
        allowOutsideClick: false,
        showConfirmButton: false,
      });

      setTimeout(() => {
        window.location.replace("/");
      }, 1500);
    } catch (error) {
      Swal.fire({
        icon: "info",
        text: "¡Sign In Failed!",
        html: error.response.data.messages
          .map((each) => `<p>${each}</p>`)
          .join(""),
      });
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <main className="flex w-full h-full items-center justify-between relative ">
      <img
        className="hidden md:block md:absolute md:top-0 md:left-0 h-screen w-[50%] object-container  "
        src="/public/images/bomberoImg.jpg"
        alt="signin"
      />
      <div className="flex flex-col md:absolute md:top-0 md:left-[50%] justify-center items-center h-screen w-full md:w-[50%] ">
        <p className="font-semibold text-[30px] text-center mt-4">
          Bomberos Buga
        </p>
        <div className="">
          <p className="font-semibold text-[14px] text-center p-2">
            Horario de Atencion
          </p>
          <p className="font-semibold text-[12px]  text-center p-2">
            Lunes, Martes, Miercoles, Jueves y Viernes
          </p>
          <p className="font-semibold text-[12px] text-center p-2">
            8:00 am -12:00pm / 2:00pm - 6:00pm
          </p>
          <p className="font-semibold text-[12px]  text-center p-2">Sabados</p>
        </div>

        <form className="flex flex-col my-[2px] relative">
          <input
            className="w-[260px] md:w-[300px] lg:w-[260px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            ref={email}
          />
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type={passwordVisible ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Contraseña"
            ref={password}
          />
          <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
          </div>
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-xl text-white rounded-lg bg-gradient-to-r from-[#ED3C3C] to-[#4338CA]"
            type="button"
            value="Ingresar"
            onClick={singin}
          />
        </form>
        <p className="font-semibold text-[12px] mt-[12px] text-center p-2">
          No tienes una cuenta todavia?{" "}
          <Anchor to="/register" className="text-[#ED3C3C]">
            Registrarte
          </Anchor>
          !
        </p>
        <p className="font-semibold text-[12px] text-center p-2">
          Regresar al{" "}
          <Anchor to="/" className="text-[#ED3C3C] hover:text-black">
            Inicio
          </Anchor>
          !
        </p>
      </div>
    </main>
  );
};

export default SindIn;
