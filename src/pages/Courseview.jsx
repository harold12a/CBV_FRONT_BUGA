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

export const Courseview = () => {
  let { _id } = useParams();
  // console.log("id: " + _id);
  const [course, setCourse] = useState(null);
  // console.log(course);
  useEffect(() => {
    if (_id) {
      axios(apiUrl + "/cursos/" + _id, headers())
        .then((res) => {
          // data sin hora zulo date
          const courseData = res.data.response.find((not) => not._id === _id);
          if (courseData) {
            courseData.date = new Date(courseData.date).toLocaleString(
              "es-ES",
              {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              }
            );
            setCourse(courseData);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [_id]);
  return (
    <>
      <div className="flex justify-center">
        <Card sx={{ maxWidth: 735 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={course?.image}
              alt="imagen de noticia"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {course?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course?.description}
              </Typography>

              <div className="flex justify-around">
                <div>
                  <Typography variant="body2">
                    <h1 className="font-bold mt-4">Inicio de curso</h1>
                    <p>{course?.date}</p>
                  </Typography>
                  <div className="mt-2">
                    <h1 className=" font-bold">Duracion</h1>
                    <p className="mt-1 ">{course?.timeofCurse}</p>
                  </div>
                  <div className="mt-2 mb-5">
                    <h1 className=" font-bold">Precio</h1>
                    {/* para que los decimales de la data aparesca exactos ya que es un number y no un string */}
                    <p className="mt-1">
                      $
                      {course?.price.toLocaleString("es-CO", {
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
                  <Button color="failure">Comprar</Button>
                </div>
              </div>
              <Paper elevation={3} className="mx-8">
                <p className="text-center font-bold text-xl mt-3 mb-4   bg-gray-300">
                  La Federacion del Bomberos del Valle del Cauca y sus Regiones
                  tiene un descuento del 50%
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
