import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../api/apiUrl";
import headers from "../api/headers";
const NotiView = () => {
  let { _id } = useParams();
  console.log("id: " + _id);
  const [noticia, setNoticia] = useState(null);
  console.log(noticia);

  useEffect(() => {
    if (_id) {
      axios(apiUrl + "/noticias/" + _id, headers())
        .then((res) => {
          //         setNoticia(res.data.response.find((noticia) => noticia._id === _id));
          //         console.log(res.data);
          //       })
          //       .catch((err) => console.log(err));
          //   }
          // }, [_id]);

          // data sin hora zulo
          const noticiaData = res.data.response.find((not) => not._id === _id);
          if (noticiaData) {
            noticiaData.date = new Date(noticiaData.date).toLocaleString(
              "es-ES",
              {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              }
            );
            setNoticia(noticiaData);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [_id]);
  return (
    <>
      <h1 className="text-xl pl-2 mt-2 font-bold">{noticia?.title}</h1>
      <div className="border-t-2 border-gray-400 w-80  my-4"></div>
      <div className="mx-auto max-w-screen-xl px-4">
        <img
          className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
          src={noticia?.image}
          alt="nature image"
        />
      </div>
      <div className="mt-2">
        <h1 className="ml-6 font-bold">Fecha</h1>
        <p className="mt-1 ml-6">{noticia?.date}</p>
      </div>
      <p className="mx-auto max-w-screen-xl px-4 mt-2">
        {noticia?.description}
      </p>
      <div className="mx-auto max-w-screen-xl px-4 mt-4 ">
        <h2 className="text-sm font-bold ">liena de emergencia</h2>
        <h2>119</h2>
      </div>
    </>
  );
};

export default NotiView;
