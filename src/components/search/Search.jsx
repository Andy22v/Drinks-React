import "./Search.css";
import { useState, useEffect } from "react";

const Search = ({ product, setProduct }) => {
  const [search, setSearch] = useState("");
  const [drinkName, setDrinkName] = useState("");

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + product)
      .then((res) => res.json())
      .then((data) => setDrinkName(data));
  }, [product]);

  const onHandleSearch = (e) => {
    e.preventDefault();
    setProduct(search);
    console.log(drinkName);
  };

  const onHandleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onHandleSearch}>
        <input
          type="text"
          placeholder="Search a Drink"
          value={search}
          onChange={onHandleChange}
          required
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
