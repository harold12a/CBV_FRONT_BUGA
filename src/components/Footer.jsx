import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { BiLogoInstagram, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { Footer } from "flowbite-react";

const BackGround = () => {
  return (
    <>
      <Footer container className="mt-5 bg-gray-100 dark:bg-gray-900">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="flex justify-around">
              <HiOutlinePhoneOutgoing className="h-8 mr-3 text-2xl" />
              <h1 className="text-xl">Emergencia 119</h1>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="Nosotros" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Documentacion</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Extra" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Politicas de Privacidad</Footer.Link>
                  {/* <Footer.Link href="#">Terms &amp; Conditions</Footer.Link> */}
                  <Footer.Link href="#">Condiciones de uso</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="Todos los derechos reservados elaborado por Harold Alzate"
              year={2023}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <BiLogoInstagram className="text-3xl text-gray-900 hover:text-gray-900 dark:hover:text-white" />
              <BiLogoFacebook className="text-3xl text-gray-900 hover:text-gray-900 dark:hover:text-white" />
              <BiLogoTwitter className="text-3xl text-gray-900 hover:text-gray-900 dark:hover:text-white" />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default BackGround;
