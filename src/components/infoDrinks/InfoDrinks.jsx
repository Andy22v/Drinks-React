import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./InfoDrinks.css";

const InfoDrinks = ({ product, setProduct }) => {
  const [infoDrink, setInfoDrink] = useState([]);

  useEffect(() => {
    GET("?s=" + product).then((data) => setInfoDrink(data.drinks[0]));
  }, []);

  const onHandleClick = () => {
    setProduct("");
  };

  return (
    <div className="InfoDrinks">
      <img src={infoDrink.strDrinkThumb} alt={infoDrink.strDrink} />
      <div className="info-drinks">
        <div className="info-text">
          <h1>{infoDrink.strDrink}</h1>
          <p>{infoDrink.strAlcoholic}</p>
          <p>❤️</p>
        </div>
      </div>
      <ul className="ingredients">
        <li>{infoDrink.strIngredient1}</li>
        <li>{infoDrink.strIngredient2}</li>
        <li>{infoDrink.strIngredient3}</li>
        <li>{infoDrink.strIngredient4}</li>
      </ul>
      <p className="instruction">{infoDrink.strInstructions}</p>
      <button className="close-btn" onClick={onHandleClick}>
        ❌
      </button>
    </div>
  );
};

export default InfoDrinks;
