import { RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import { HiTrash } from "react-icons/hi";
import Container from "@mui/material/Container";
import { Typography } from "@material-tailwind/react";

export const Cart = () => {
  return (
    <>
      <div className="flex xl:justify-between md:flex-col mt-4 flex-col ">
        <Container maxWidth="lg">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="bg-black text-white">
                Producto{" "}
              </Table.HeadCell>
              <Table.HeadCell className="bg-black text-white">
                Imagen
              </Table.HeadCell>
              <Table.HeadCell className="bg-black text-white">
                Cantidad
              </Table.HeadCell>
              <Table.HeadCell className="bg-black text-white">
                Valor
              </Table.HeadCell>

              <Table.HeadCell className="bg-black text-white">
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {'Apple MacBook Pro 17"'}
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <img
                    src="/public/images/extintores1.jpeg"
                    alt="img"
                    className="w-[65px] rounded-xl"
                  />
                </Table.Cell>
                <Table.Cell>
                  <div className="absolute flex ml-[-3%]">
                    <div className="flex justify-center items-center space-x-3">
                      <>
                        <RiIndeterminateCircleLine className="text-[150%] cursor-pointer transition-transform transform hover:scale-105 text-red-400" />
                      </>

                      <div>
                        <input
                          // defaultValue={1}
                          // value={each.quantity}
                          type="number"
                          id="first_product"
                          className="bg-gray-100 w-14 text-center border border-l-red-400 border-r-t_background1 border-gray-300 text-gray-900 text-sm rounded-lg "
                          required
                        />
                      </div>

                      <RiAddCircleLine className="text-[150%] cursor-pointer transition-transform transform hover:scale-105 text-t_background1" />
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <HiTrash className="text-2xl text-red-500" />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Container>
        <div className="md:mt-10 mt-10">
          <Container maxWidth="xs">
            <Table>
              <Table.Head>
                <Table.HeadCell className="text-center text-red-700 ">
                  <Typography variant="h4" className=" font-bold text-[20px] ">
                    Detalle Compra
                  </Typography>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <Typography
                      variant="h4"
                      className=" font-bold text-[20px] "
                    >
                      Total
                    </Typography>
                    <div>
                      <Typography
                        variant="h4"
                        className=" font-bold text-[20px] mt-1 "
                      >
                        $ 350
                      </Typography>
                    </div>
                    <div className="flex justify-center mt-4">
                      <Button color="failure">Confirmar Compra</Button>
                    </div>
                    <div className="mt-10">
                      <Typography
                        variant="h4"
                        className=" font-bold text-[20px] "
                      >
                        Vuelva pronto
                      </Typography>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Container>
        </div>
      </div>
    </>
  );
};
