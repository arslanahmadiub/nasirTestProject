import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/Product/ProductCard";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ borderRight: "2px solid lightgray" }}>
          <Sidebar />
        </div>
        <div style={{ display: "flex", padding: "16px", flexWrap: "wrap" }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default App;
