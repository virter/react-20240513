/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "./constants/mock";
import { RestaurantBlock } from "./components/restaurant-block/component";
import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";

const root = createRoot(document.getElementById("root"));

console.log(restaurants);

root.render(
  <div>
    <Header/>
    {restaurants.map((item) => (
      <RestaurantBlock restaurant={item} />
    ))}
    <Footer/>
  </div>
);