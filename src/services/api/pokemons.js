import axios from 'axios';
import endPoints from '.';

const addPokemon = async body => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.pokemons.addPokemonAPI, body, config);
  return response.data;
};

const updatePokemon = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.put(endPoints.pokemons.updatePokemonAPI(id), body, config);
  return response.data;
};

const deletePokemon = async id => {
  const response = await axios.delete(endPoints.pokemons.deletePokemonAPI(id));
  return response.data;
};

export { addPokemon, updatePokemon, deletePokemon };
