import { useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import apiUrl from "../api/apiUrl";
import Swal from "sweetalert2";
import { Typography } from "@material-tailwind/react";

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
    <>
      <div className="flex justify-center  shadow-2xl rounded-xl xl:mx-[30%] mb-[2%] ">
        <form className="flex max-w-md flex-col gap-4  relative  ">
          <div>
            <div className="  block mt-4 ">
              <Typography variant="h6" className=" font-bold ">
                Ingrese Email
              </Typography>
            </div>
            <input
              className="w-[260px] md:w-[300px] lg:w-[260px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              ref={email}
            />
          </div>
          <div>
            <div className=" block ">
              <Typography variant="h6" className=" font-bold ">
                Ingrese Constrseña
              </Typography>
            </div>
            <input
              className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px]  h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
              type={passwordVisible ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Contraseña"
              ref={password}
            />
            <div
              className="absolute xl:mt-[-7%] mt-[-13%]  right-4  transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <input
              className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[200px] h-[45px] p-2 my-[12px]  text-xl text-white rounded-lg bg-gradient-to-r from-[#ED3C3C] to-[#4338CA]"
              type="button"
              value="Ingresar"
              onClick={singin}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SindIn;
