import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { addPokemon, updatePokemon, deletePokemon } from '../../services/api/pokemons';
import endPoints from '../../services/api';
import FormInformation from '../../components/FormInformation';
import CustomButton from '../../components/CustomButton';
import Search from '../../components/Search';
import Table from "../../components/Table";
import './index.css';

const Home = () => {
  const formRef = useRef();
  const [searchValue, setSearchValue] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    attack: 0,
    defense: 0,
  })

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(endPoints.pokemons.getAllPokemonsAPI(idAuthor));
      setPokemons(response.data);
    }
    try {
      getPokemons();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const idAuthor = 4344;

  const pokemonsFiltered = searchValue?.length
    ? pokemons.filter(pokemon => {
      const pokemonName = pokemon.name.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return pokemonName.includes(searchText)
    })
    : pokemons

  const scrollToForm = () => {
    formRef.current.scrollIntoView()
  }

  const setDefaultValues = () => {
    setFormData({
      name: "",
      image: "",
      attack: 0,
      defense: 0
    })
  }

  const newPokemon = () => {
    setDefaultValues();
    scrollToForm();
  }

  const handleEdit = (id) => {
    const currentPokemon = pokemons.find(obj => obj.id === id)
    scrollToForm();
    setFormData({ ...currentPokemon })
  }

  const handleDelete = (id) => {
    const currentIndex = pokemons.findIndex(obj => obj.id === id)
    const newPokemons = [...pokemons]
    newPokemons.splice(currentIndex, 1)
    setPokemons(newPokemons);
    deletePokemon(id);
  }

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSliderChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newData = {
      ...formData,
      idAuthor
    }

    if (formData.id) {
      updatePokemon(formData.id, formData)
    } else {
      addPokemon(newData)
    }
    setDefaultValues()
  }

  return (
    <div className="home__container">
      <header>
        <h2>Listado de Pokemon</h2>
        <div className="section__group">
          <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <CustomButton
            onClick={newPokemon}>
            Nuevo
          </CustomButton>
        </div>
      </header>
      <main>
        <Table
          pokemons={pokemonsFiltered}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>
      <section ref={formRef}>
        <FormInformation
          formData={formData}
          handleInputChange={handleInputChange}
          handleSliderChange={handleSliderChange}
          handleSubmit={handleSubmit}
          handleCancel={setDefaultValues}
        />
      </section>
    </div>
  )
}

export default Home
