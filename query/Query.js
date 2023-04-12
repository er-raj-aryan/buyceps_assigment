import { gql } from "@apollo/client";

const GET_ALL_POKEMON = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

const GET_POKEMON_BY_ID = gql`
  query pokemon($id: String) {
    pokemon(id: $id) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

const GET_POKEMON_EVOLUTION = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      name
      evolutions {
        id
        number
        name
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        evolutions {
          id
          name
          image
        }
        maxHP
        image
      }
    }
  }
`;

export { GET_ALL_POKEMON, GET_POKEMON_BY_ID ,GET_POKEMON_EVOLUTION};
