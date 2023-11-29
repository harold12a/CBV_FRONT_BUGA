import NavBar from "../components/NavBar";
import BackGround from "../components/Footer";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <BackGround />
    </>
  );
};

export default Main;
