import { useState } from "react";
import DrinksList from "./components/DrinksList/DrinksList";
import InfoDrinks from "./components/infoDrinks/InfoDrinks";
import Search from "./components/navbar";
import "./App.css";

function App() {
  const [product, setProduct] = useState("");

  const onRender = () => {
    switch (product) {
      case "":
        return (
          <>
            <DrinksList name="rum" setProduct={setProduct} />
            <DrinksList name="vodka" setProduct={setProduct} />
            <DrinksList name="gin" setProduct={setProduct} />
            <DrinksList name="tequila" setProduct={setProduct} />
          </>
        );
      default:
        return <InfoDrinks product={product} setProduct={setProduct} />;
    }
  };

  return (
    <div className="App">
      <Search product={product} setProduct={setProduct} />
      {onRender()}
    </div>
  );
}

export default App;
