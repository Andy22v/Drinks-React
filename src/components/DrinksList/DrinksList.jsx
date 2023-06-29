import Drinks from "../Drinks/Drinks";
import "./DrinksList.css";

const DrinksList = ({ drinkList, name }) => {
  return (
    <div className="DrinkList">
      <h2>{name}</h2>
      <div className="drink-list">
        {drinkList[0]?.map((drink) => (
          <Drinks data={drink} key={drink.idDrink} />
        ))}
      </div>
    </div>
  );
};

export default DrinksList;
