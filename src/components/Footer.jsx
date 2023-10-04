import { Link as Anchor } from "react-router-dom";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { BiLogoInstagram, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 mt-5">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Anchor to="/" className="flex items-center">
                <HiOutlinePhoneOutgoing className="h-8 mr-3 text-2xl" />

                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  EMERGENCIA 119
                </span>
              </Anchor>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Recursos
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Anchor to="/" className="hover:underline">
                      cursos
                    </Anchor>
                  </li>
                  <li>
                    <Anchor to="/" className="hover:underline">
                      Capacitaciones
                    </Anchor>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Siguenos
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Anchor className="hover:underline ">Instagram</Anchor>
                  </li>
                  <li>
                    <Anchor className="hover:underline">FaceBook</Anchor>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Cuerpo de Bomberos Voluntarios de Buga
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Anchor className="hover:underline">Vison</Anchor>
                  </li>
                  <li>
                    <Anchor className="hover:underline">Mision</Anchor>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 . Todos los derechos reservados elbaorado por harold alzate
              - 3117435713
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <BiLogoInstagram className="text-3xl text-gray-900 hover:text-gray-900 dark:hover:text-white" />
              <BiLogoFacebook className="text-3xl text-gray-900 hover:text-gray-900 dark:hover:text-white" />
              <BiLogoTwitter className="text-3xl text-gray-900 hover:text-gray-900 dark:hover:text-white" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
