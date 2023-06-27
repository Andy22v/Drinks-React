import { useState, useEffect } from "react";
import Drinks from "../Drinks/Drinks";

const DrinksList = (name, setDrinks) => {
  const [drinkList, setDrinkList] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name)
      .then((res) => res.json())
      .then((data) => setDrinkList(data.drinks));
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <div>
        {drinkList.map((drink) => (
          <Drinks data={drink} key={drink.idDrink} setDrinks={setDrinks} />
        ))}
      </div>
    </div>
  );
};

export default DrinksList;
