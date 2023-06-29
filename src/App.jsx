import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/search";
import DrinksList from "./components/DrinksList/DrinksList";
import InfoDrinks from "./components/infoDrinks/InfoDrinks";

function App() {
  const [rum, setRum] = useState([]);
  const [gin, setGin] = useState([]);
  const [vodka, setVodka] = useState([]);
  const [tequila, setTequila] = useState([]);
  const [product, setProduct] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    loadGinList();
    loadRumList();
    loadTequilaList();
    loadVodkaList();
  }, []);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = () => {
    setProductList((prevState) => [
      ...prevState,
      ...rum,
      ...gin,
      ...tequila,
      ...vodka,
    ]);
  };

  const loadRumList = async () => {
    return await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + "rum"
    )
      .then((res) => res.json())
      .then(({ drinks }) => setRum(drinks));
  };

  const loadGinList = async () => {
    return await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + "gin"
    )
      .then((res) => res.json())
      .then(({ drinks }) => setGin(drinks));
  };

  const loadVodkaList = async () => {
    return await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + "vodka"
    )
      .then((res) => res.json())
      .then(({ drinks }) => setVodka(drinks));
  };

  const loadTequilaList = async () => {
    return await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + "tequila"
    )
      .then((res) => res.json())
      .then(({ drinks }) => setTequila(drinks));
  };

  const categories = [
    {
      rum: rum,
    },
    { vodka: vodka },
    { teqila: tequila },
    { gin: gin },
  ];

  return (
    <div className="App">
      <Search productList={productList} setProductList={setProductList} />
      {product ? (
        <InfoDrinks product={product} setProduct={setProduct} />
      ) : (
        <>
          {categories.map((category) => (
            <DrinksList
              drinkList={Object.values(category)}
              name={Object.keys(category)}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
