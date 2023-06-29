import "./Drinks.css";
const Drinks = ({ data, setProduct }) => {
  const onHandleClick = () => {};

  return (
    <div className="Drinks" onClick={onHandleClick}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <p key={data.idDrink}>{data.strDrink}</p>
    </div>
  );
};

export default Drinks;
