import { useState } from "react";
import "./App.css";
import DrinksList from "./components/DrinksList/DrinksList";
import InfoDrinks from "./components/infoDrinks/InfoDrinks";

function App() {
  const [product, setProduct] = useState([]);

  return (
    <div className="App">
      {product ? (
        <InfoDrinks product={product} setProduct={setProduct} />
      ) : (
        <>
          <DrinksList name="rum" setProduct={setProduct} />
          <DrinksList name="vodka" setProduct={setProduct} />
          <DrinksList name="gin" setProduct={setProduct} />
          <DrinksList name="tequila" setProduct={setProduct} />
        </>
      )}
    </div>
  );
}

export default App;
