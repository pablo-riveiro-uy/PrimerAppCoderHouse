import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home";
import { ItemListContainer } from "../components/ItemListContainer";
import { ItemDetailsContainer } from "../components/ItemDetailsContainer";
import Cart from "../components/Cart";
import React from "react";
import CartProvider from "..components/CardContext";

const Router = () => (
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/cart/"} element={<Cart />} />
          <Route path={`/item/:id`} element={<ItemDetailsContainer />} />
          <Route
            path="*"
            element={<div style={{ margin: "50px" }}>Error 404 guey</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </CartProvider>
);

export default Router;
