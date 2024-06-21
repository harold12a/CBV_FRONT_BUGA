import { Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "flowbite-react";
export const Inspection = () => {
  return (
    <>
      <Typography variant="h5" className=" font-bold pl-2 mt-2 mb-4 ">
        Inspecciones
      </Typography>

      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <div className="mx-auto max-w-screen-xl px-4">
        <img
          className="h-1/6 w-full rounded-lg object-cover  object-center shadow-xl shadow-blue-gray-900/50"
          src="/public/images/img9.jpg"
          alt="nature image"
        />
      </div>
      <div className="mt-[2vh]">
        <Typography
          variant="h5"
          className=" font-bold text-center"
        ></Typography>
        <h1 className="text-center text-2xl"> Datos Generales</h1>
        <Typography variant="h6" className=" font-bold mt-1 mb-4 text-center">
          Ingrese todos los datos requeridos
        </Typography>
      </div>
      <div className="flex w-72 flex-col gap-6 mx-auto items-center">
        <Input color="blue" label="Nombre" />
        <Input color="blue" label="Telefono" />
        <Input color="purple" label="Email" type="text" />
        <Input color="purple" label="Direccion" type="text" />
        <Input color="purple" label="Barrio" type="text" />
        <Input color="indigo" label="Nombre del establecimiento" type="text" />
      </div>
      <div className="flex  justify-center mt-5">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            <div className="text-2xl  font-bold">Indique su visita</div>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Primera Visita"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Segunda Visita"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Renovavion de Certificado"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="flex flex-col w-72 mx-auto justify-center mt-5">
        <Button color="blue">Enviar</Button>
        <Button color="failure">Borrar Todos los Campos</Button>
        <Button color="success">
          <a href="https://api.whatsapp.com/send?phone=3117435713&text=Hola,%20me%20gustaría%20obtener%20más%20información.">
            WhatsApp
          </a>
        </Button>
      </div>
    </>
  );
};
