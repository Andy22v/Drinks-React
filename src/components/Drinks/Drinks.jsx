const Drinks = ({ product, setProduct }) => {
  console.log(product);
  return (
    <div>
      {product.map((drink) => (
        <p key={drink.idDrink}>{drink.strDrink}</p>
      ))}
    </div>
  );
};

export default Drinks;
