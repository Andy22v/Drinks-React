import { useState, useEffect } from "react";
import Drinks from "../Drinks/Drinks";
import "./DrinksList.css";

const DrinksList = ({ name, setProduct }) => {
  const [drinkList, setDrinkList] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name)
      .then((res) => res.json())
      .then((data) => setDrinkList(data.drinks));
  }, []);

  return (
    <div className="DrinkList">
      <h2>{name}</h2>
      <div className="drink-list">
        {drinkList.map((drink) => (
          <Drinks data={drink} setProduct={setProduct} key={drink.idDrink} />
        ))}
      </div>
    </div>
  );
};

export default DrinksList;
