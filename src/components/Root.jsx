import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const Root = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  console.log(products);
  return (
    <div>
      <ProductContext.Provider value={products}>
        <CartContext.Provider value={[cart, setCart]}>
          <Header />
          <Outlet />
          <Footer />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
};

export default Root;
