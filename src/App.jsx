import { useState } from "react";
import "./App.css";
import Drinks from "./components/Drinks/Drinks";
import DrinksList from "./components/DrinksList/DrinksList";

function App() {
  const [product, setProduct] = useState([]);

  return (
    <div className="App">
      {product ? (
        <Drinks product={product} setProduct={setProduct} />
      ) : (
        <DrinksList name="rum" setProduct={setProduct} />
      )}
    </div>
  );
}

export default App;
