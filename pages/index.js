import Image from "next/image";
import { Inter } from "next/font/google";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import ListViews from "@/components/ListViews";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pagination from "@mui/material/Pagination";
import {GET_ALL_POKEMON} from '@/query/Query'
import { PaginationItem } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [first, setFirst] = useState(20);
  const [openDetailPage, setOpenDetailPage] = useState({});
  const { loading, error, data } = useQuery(GET_ALL_POKEMON, {
    variables: { first },
  });

  const handleClick = (pItem) => {
    console.log("raj selected item", pItem);
    setOpenDetailPage(pItem);
  };

  if (loading)
    return (
      <div
        className=" w-full h-[100vh] flex
  justify-center items-center "
      >
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div
        className=" w-full h-[100vh] flex
  justify-center items-center "
      >
        <p>Error : {error.message}</p>
      </div>
    );
  return (
    <div>
      <Navbar />
      <div className="text-gray-600 body-font flex flex-col justify-center items-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {data.pokemons.map((item, index) => (
              <div
                className="xl:w-1/4 md:w-1/2 m-4 drop-shadow-lg cursor-pointer "
                onClick={() => handleClick(item)}
              >
                <ListViews
                  id={item.id}
                  name={item.name}
                  number={item.number}
                  types={item.types}
                  imageUrl={item.image}
                />
              </div>
            ))}
          </div>
        </div>
        <Pagination count={10} shape="rounded" ></Pagination>
      </div>
      <Footer />
    </div>
  );
}
