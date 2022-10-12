import React from "react";
import ProductAdder from "./components/ProductAdder";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Products List</h1>
        <ProductsList />
      </div>
      <div>
        <h1>Products Adder</h1>
        <ProductAdder />
      </div>
    </div>
  );
}

export default App;
