/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "./constants/mock";
import { RestaurantBlock } from "./components/restaurant-block/component";

const root = createRoot(document.getElementById("root"));

console.log(restaurants);

root.render(
  <div>
    {restaurants.map((item) => (
      <RestaurantBlock restaurant={item} />
    ))}
  </div>
);