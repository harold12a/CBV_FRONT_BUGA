// import React from 'react'
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Ingresar = () => {
  const navigate = useNavigate();

  const singin = () => {
    // try {
    //   await axios.post('url');
    //   navigate('/');
    // } catch (error) {
    //   console.log(error);
    // }

    setTimeout(() => navigate("/buttons"), 2000);

    let data = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(data);
  };

  const email = useRef();
  const password = useRef();
  return (
    <main className="flex w-full h-full items-center justify-between relative ">
      <img
        className="hidden md:block md:absolute md:top-0 md:left-0 h-screen w-[50%] object-container  "
        src="/public/images/bomberoImg.jpg"
        alt="signin"
      />
      <div className="flex flex-col md:absolute md:top-0 md:left-[50%] justify-center items-center h-screen w-full md:w-[50%] ">
        <p className="font-semibold text-[30px] text-center">
          Bienvenido <span className="text-[#4338CA]">!</span>!
        </p>
        <p className="font-semibold text-[12px] mb-[12px] text-center p-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit culpa
          doloremque cumque similique ul
        </p>
        <form className="flex flex-col my-[2px]">
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
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            ref={password}
          />
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-xl text-white rounded-lg bg-gradient-to-r from-[#4338CA] to-[#4338CA]"
            type="button"
            value="Ingresar"
            onClick={singin}
          />
        </form>
        <p className="font-semibold text-[12px] mt-[12px] text-center p-2">
          No tienes una cuenta todavia?{" "}
          <Anchor to="/register" className="text-[#4338CA]">
            Registrarme
          </Anchor>
          !
        </p>
        <p className="font-semibold text-[12px] text-center p-2">
          Regresar al inicio{" "}
          <Anchor to="/" className="text-[#4338CA] hover:text-black">
            Inicio
          </Anchor>
          !
        </p>
      </div>
    </main>
  );
};

export default Ingresar;
