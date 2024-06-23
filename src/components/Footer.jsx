
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const BackGround = () => {
  return (
    <>
    
 <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Documentacion" />
            <Footer.LinkGroup col>
              <Footer.Link href="/">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Redes Sociales" />
            <Footer.LinkGroup col>
              <Footer.Link href="https://www.instagram.com/bomberosbuga?igsh=MWQyOTd6Nmc5OXdpeA==">Instagram</Footer.Link>
              <Footer.Link href="https://www.facebook.com/BomberosVoluntariosdeBuga/?locale=es_LA">Facebook</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Contacto" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">2366891 - 2366893 </Footer.Link>
              <Footer.Link href="#">bugabomberos@gmail.com</Footer.Link>
              <Footer.Link href="#">calle 2sur No 10-72, Buga, Colombia</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Linea de Emergencia" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">119</Footer.Link>
              <Footer.Link href="#">2365889</Footer.Link>
              {/* <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link> */}
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Realizado por: HAROLD HUMBERTO ALZATE AYALA™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/BomberosVoluntariosdeBuga/?locale=es_LA" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/bomberosbuga?igsh=MWQyOTd6Nmc5OXdpeA==" icon={BsInstagram} />
            {/* <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} /> */}
          </div>
        </div>
      </div>
    </Footer>
    </>
  );
};

export default BackGround;
