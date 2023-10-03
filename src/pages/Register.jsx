import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Resgister = () => {
  const navigate = useNavigate();

  const singup = () => {
    setTimeout(() => navigate("/ingresar"), 2000);

    let data = {
      email: email.current.value,
      password: password.current.value,
      name: name.current.value,
    };
    console.log(data);
  };

  const name = useRef();
  const email = useRef();
  const password = useRef();

  return (
    <main className="flex w-full min-h-screen items-center justify-between relative ">
      <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
        <p className="font-semibold text-[32px] text-center">Bienvenidos!</p>
        <p className="font-semibold text-[12px] mb-[12px] text-center p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam
          nobis illo modi facilis molestiae optio atque deserunt impedit labor
        </p>
        <form className="flex flex-col my-[2px]">
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="nombre"
            name="nombre"
            id="nombre"
            placeholder="Nombre"
            ref={name}
          />
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
            placeholder="contraseña"
            ref={password}
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="myCheckbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
            />
            <label id="myCheckbox" className="ml-2 text-gray-700">
              enviar notificacion al correo
            </label>
          </div>
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-xl text-white rounded-lg bg-gradient-to-r from-[#4338CA] to-[#4338CA]"
            type="button"
            value="registrarme"
            onClick={singup}
          />
          <div className="relative">
            <input
              className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[18px] text-center rounded-lg border-2 border-[#1F1F1F]"
              type="password"
              name="password"
              id="password"
              placeholder="Ingresarme con Google"
            />
            <img
              src="/public/images/Google.png"
              alt="google"
              className="absolute right-[318px] top-[24px] w-[22px] hidden lg:block"
            />
          </div>
        </form>
        <p className="font-semibold text-[12px] mt-[12px] text-center p-2">
          Ya estas registrado?{" "}
          <Anchor to="/ingresar" className="text-[#4338CA]">
            Ingresar
          </Anchor>
          !
        </p>
        <p className="font-semibold text-[12px] text-center p-2">
          regresar al{" "}
          <Anchor to="/" className="text-[#4338CA] hover:text-black">
            inicio
          </Anchor>
          !
        </p>
      </div>
      <img
        className="hidden md:block md:absolute absolute md:top-0 md:right-0 h-full w-[40%]  mr-[0px]  object-container"
        src="/public/images/bomberoRegister.jpeg"
        alt="register"
      />
    </main>
  );
};

export default Resgister;
