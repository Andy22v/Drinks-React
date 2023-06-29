import { useEffect, useState } from "react";
import "./Search.css";

const Search = ({ productList, setProductList }) => {
  const [search, setSearch] = useState();
  const [searchResults, setSearchResults] = useState([]);
  console.log(productList);
  useEffect(() => {
    setProductList(productList);
  }, [product]);

  const onHandleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="Search">
      <div className="input-contain">
        <input
          type="text"
          placeholder="Search Drink"
          onChange={onHandleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
