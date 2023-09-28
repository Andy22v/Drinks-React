import "./Navbar.css";
import { useState } from "react";

const Navbar = ({ setProduct }) => {
  const [search, setSearch] = useState("");

  const onHandleSearch = (e) => {
    e.preventDefault();
    setProduct(search);
  };

  const onHandleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="Navbar">
      <div className="homePage">
        <h3 onClick={() => setProduct("")}>Home</h3>
      </div>
      <form className="form" onSubmit={onHandleSearch}>
        <input
          className="inputForm"
          type="text"
          placeholder="Search a Drink"
          value={search}
          onChange={onHandleChange}
          required
        />
        <input className="inputBtn" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Navbar;
