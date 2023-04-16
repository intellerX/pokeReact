const API = process.env.REACT_APP_PUBLIC_API_URL;

const endPoints = {
  pokemons: {
    getAllPokemonsAPI: idAuthor => `${API}/?idAuthor=${idAuthor}`,
    addPokemonAPI: `${API}/`,
    getPokemonIdAPI: id => `${API}/${id}/`,
    updatePokemonAPI: id => `${API}/${id}/`,
    deletePokemonAPI: id => `${API}/${id}/`,
  }
};

export default endPoints;
