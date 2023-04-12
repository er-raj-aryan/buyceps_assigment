import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { GET_POKEMON_EVOLUTION } from "@/query/Query"; 
import { useQuery } from "@apollo/client";

function PokemonModal(props) {
  const handleClose = () => {
    props.handleClose();
};
  const { loading, error, data } = useQuery(GET_POKEMON_EVOLUTION, {
    variables: { id: props.pokemonID },
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
    const pokemonName = data.pokemon.name;
    const pokemonEvolutions = data.pokemon.evolutions;
  return (
    <Modal
      isOpen={props.Open}
      onRequestClose={handleClose}
      contentLabel="Example Modal"
    >
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto">
          <div class="flex  justify-between items-center text-center w-full mb-10">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {pokemonName}
            </h1>
            <button className=" font-bold font-sans bg-gray-300 p-1 w-10 mb-3 rounded-full " onClick={() => handleClose()}>
                X
            </button>
          </div>
          <div class="flex flex-wrap -m-2">
          {
            pokemonEvolutions && pokemonEvolutions.map(item => (
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-24 h-24  object-contain object-center flex-shrink-0  mr-4"
                  src={item.image}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    {item.name}
                  </h2>
                  <p class="text-gray-500">{item.number}</p>
                </div>
              </div>
            </div>
            ))
          }
          {
            !pokemonEvolutions && <p class=" leading-relaxed text-base">There is no evolution in <span className="font-bold  ">
            {pokemonName}
            </span></p>
          }
          </div>
        </div>
      </section>
    </Modal>
  );
}

export default PokemonModal;
