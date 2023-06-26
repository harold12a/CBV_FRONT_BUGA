import React from "react";
import { Link as Anchor } from 'react-router-dom'


const Buttons = () => {
  return (
    <>

    <div className="bg-white border-4 border-white drop-shadow-lg  h-[70vh] mx-5 mt-[10vh] " >
    <div class="grid grid-rows-2 grid-flow-col gap-[50px] mt-[23vh] text-center ">

  <div> <Anchor to='/schema' type="button" class="px-[58px] py-4 bg-red-500 text-white text-3xl font-bold hover:bg-red-800 transition-colors duration-300 ease-in-out rounded-full shadow-lg  ">Cursos</Anchor></div>
  <div> <Anchor type="button" class="px-[58px] py-4 bg-red-500 text-white text-3xl font-bold hover:bg-red-800 transition-colors duration-300 ease-in-out rounded-full shadow-lg  ">Pendiente</Anchor></div>
  <div> <Anchor type="button" class="px-[58px] py-4 bg-red-500 text-white text-3xl font-bold hover:bg-red-800 transition-colors duration-300 ease-in-out rounded-full shadow-lg  ">Pendiente</Anchor></div>
  <div> <Anchor type="button" class="px-[58px] py-4 bg-red-500 text-white text-3xl font-bold hover:bg-red-800 transition-colors duration-300 ease-in-out rounded-full shadow-lg  ">Pendiente</Anchor></div>
  <div> <Anchor type="button" class="px-[58px] py-4 bg-red-500 text-white text-3xl font-bold hover:bg-red-800 transition-colors duration-300 ease-in-out rounded-full shadow-lg  ">Pendiente</Anchor></div>
  <div> <Anchor type="button" class="px-[58px] py-4 bg-red-500 text-white text-3xl font-bold hover:bg-red-800 transition-colors duration-300 ease-in-out rounded-full shadow-lg  ">Pendiente</Anchor></div>



</div>


    </div>
   
    </>
  );
};

export default Buttons;
