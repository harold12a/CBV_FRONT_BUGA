import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../api/apiUrl";
import headers from "../api/headers";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Button } from "flowbite-react";
import { Link as Anchor } from "react-router-dom";
export const TrainingView = () => {
  let { _id } = useParams();
  // console.log("id: " + _id);
  const [training, setTraining] = useState(null);
  // console.log(course);
  useEffect(() => {
    if (_id) {
      axios(apiUrl + "/capacitaciones/" + _id, headers())
        .then((res) => {
          // data sin hora zulo date
          const trainingData = res.data.response.find((not) => not._id === _id);
          if (trainingData) {
            trainingData.date = new Date(trainingData.date).toLocaleString(
              "es-ES",
              {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              }
            );
            setTraining(trainingData);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [_id]);
  return (
    <>
      <div className="flex justify-center mx-2 ">
        <Card sx={{ maxWidth: 735 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={training?.image}
              alt="imagen de noticia"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {training?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {training?.description}
              </Typography>

              <div className="flex justify-around">
                <div>
                  <Typography variant="body2">
                    <h1 className="font-bold mt-4">Inicio de Capacitacion</h1>
                    <p>{training?.date}</p>
                  </Typography>
                  <div className="mt-2">
                    <h1 className=" font-bold">Duracion</h1>
                    <p className="mt-1 ">{training?.timeofTraining}</p>
                  </div>
                  <div className="mt-2 mb-5">
                    <h1 className=" font-bold">Precio</h1>
                    {/* para que los decimales de la data aparesca exactos ya que es un number y no un string */}
                    <p className="mt-1">
                      $
                      {training?.price.toLocaleString("es-CO", {
                        minimumFractionDigits: 3,
                        maximumFractionDigits: 3,
                      })}
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <Button color="blue">
                    <a href="https://api.whatsapp.com/send?phone=3117435713&text=Hola,%20me%20gustaría%20obtener%20más%20información.">
                      Solicitar Información
                    </a>
                  </Button>
                  <Anchor to={""}>
                    <Button color="failure">Comprar</Button>
                  </Anchor>
                </div>
              </div>
              <Paper elevation={3} className="mx-8">
                <p className="text-center font-bold text-xl mt-3 mb-4   bg-gray-300">
                  Empresas del valle del cauca tiene un descuento del 15%
                </p>
              </Paper>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </div>
    </>
  );
};
