import { ReactComponent as SearchIcon } from '../../assets/images/search.svg';
import './index.css';

const Search = ({
  searchValue,
  setSearchValue
}) => {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <section className='search__section'>
      <SearchIcon />
      <input
        aria-label="search"
        type="text"
        name="search"
        id="search"
        onChange={onSearchValueChange}
        value={searchValue}
      />
    </section>
  )
}

export default Search
