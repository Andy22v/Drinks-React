import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

const InfoDrinks = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    GET("?s=" + "rum").then((data) => setProduct(data.drinks[0]));
  }, []);

  // const onHandleClick = () => {
  //   setDrinks("");
  // };

  return (
    <div>
      <img src={product.strDrinkThumb} alt={product.strDrink} />
      <div className="ProductSection__text">
        <div className="ProductSection__text--heading">
          <h1>{product.strDrink}</h1>
          <p>{product.strAlcoholic}</p>
        </div>
        <p>❤️</p>
      </div>
      <ul className="ProductSection__ingredients">
        <li>{product.strIngredient1}</li>
        <li>{product.strIngredient2}</li>
        <li>{product.strIngredient3}</li>
        <li>{product.strIngredient4}</li>
      </ul>
      <p className="ProductSection__instruct">{product.strInstructions}</p>
      <button className="ProductSection__close--button">❌</button>
    </div>
  );
};

export default InfoDrinks;
