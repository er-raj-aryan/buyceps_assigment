import React from "react";
import { useRouter } from "next/router";
import { GET_POKEMON_BY_ID } from "@/query/Query";
import { useQuery } from "@apollo/client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PokemonModal from "@/components/Modal";

function pokemonID() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () =>{
    setOpen(true);
  } 
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const { pokemonID } = router.query;
  const { loading, error, data } = useQuery(GET_POKEMON_BY_ID, {
    variables: { id: pokemonID },
  });

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

  const pokemonDetails = data.pokemon;

  console.log("raj",open);
  return (
    <div>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-24 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <div className="flex justify-center w-full">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={pokemonDetails.image}
              />
            </div>
          </div>
          {/* pokemon name */}
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col gap-4 md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {pokemonDetails.name}
            </h1>
            <div className=" flex gap-5 flex-wrap">
              {/* text details */}
              <div className="flex-grow ">
                {/* pokemon height */}
                <div className="flex flex-col gap-2 items-center md:items-start ">
                  <h2 class="font-bold">Height:</h2>
                  <div className="flex gap-3">
                    <p>minimum : {pokemonDetails.height.minimum}</p>
                    <p>maximum : {pokemonDetails.height.maximum}</p>
                  </div>
                </div>
                {/* pokemon weight */}
                <div className="flex flex-col gap-2 items-center md:items-start">
                  <h2 class=" font-bold">Weight:</h2>
                  <div className="flex gap-3 ">
                    <p>minimum : {pokemonDetails.weight.minimum}</p>
                    <p>maximum : {pokemonDetails.weight.maximum}</p>
                  </div>
                </div>
                {/* classification */}
                <div className="flex flex-col gap-2 items-center md:items-start">
                  <h2 class=" font-bold">Classification:</h2>
                  <div className="flex gap-3 ">
                    <p> {pokemonDetails.classification}</p>
                  </div>
                </div>
              </div>
              {/* badge details */}
              <div className="flex-grow ">
                {/* type */}
                <div className="flex flex-col gap-2 items-center md:items-start">
                  <h2 class=" font-bold">Type:</h2>
                  <div className="flex items-center gap-3 ">
                    {pokemonDetails.types
                      ? pokemonDetails.types.map((item) => (
                          <div
                            className={`p-1 ${
                              item === "Grass"
                                ? "bg-green-500"
                                : item === "Fire"
                                ? "bg-orange-500 "
                                : item === "Water"
                                ? "bg-blue-500 "
                                : item === "Bug"
                                ? "bg-green-300 "
                                : item === "Normal"
                                ? "bg-gray-200"
                                : item === "Flying"
                                ? "bg-blue-300 "
                                : "bg-violet-500 "
                            } rounded`}
                          >
                            {item}
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
                {/* pokemon weaknesses */}
                <div className="flex flex-col gap-2 items-center md:items-start">
                  <h2 class=" font-bold">Weaknesses:</h2>
                  <div className="flex items-center gap-3 ">
                    {pokemonDetails.weaknesses
                      ? pokemonDetails.weaknesses.map((item) => (
                          <div
                            className={`p-1 ${
                              item === "Grass"
                                ? "bg-green-500"
                                : item === "Fire"
                                ? "bg-orange-500 "
                                : item === "Water"
                                ? "bg-blue-500 "
                                : item === "Bug"
                                ? "bg-green-300 "
                                : item === "Normal"
                                ? "bg-gray-200"
                                : item === "Flying"
                                ? "bg-blue-300 "
                                : "bg-violet-500 "
                            } rounded`}
                          >
                            {item}
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
                {/* pokemon resistant */}
                <div className="flex flex-col gap-2 items-center md:items-start">
                  <h2 class=" font-bold">Resistant:</h2>
                  <div className="flex items-center gap-3 ">
                    {pokemonDetails.resistant
                      ? pokemonDetails.resistant.map((item) => (
                          <div
                            className={`p-1 ${
                              item === "Grass"
                                ? "bg-green-500"
                                : item === "Fire"
                                ? "bg-orange-500 "
                                : item === "Water"
                                ? "bg-blue-500 "
                                : item === "Bug"
                                ? "bg-green-300 "
                                : item === "Normal"
                                ? "bg-gray-200"
                                : item === "Flying"
                                ? "bg-blue-300 "
                                : "bg-violet-500 "
                            } rounded`}
                          >
                            {item}
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-center">
              <button onClick={handleOpen} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Pokemon's evolutions
              </button>
            </div>
          </div>
        </div>
      </section>
      <PokemonModal Open={open} handleClose={handleClose} pokemonID={pokemonID} />
      <Footer />
    </div>
  );
}

export default pokemonID;
