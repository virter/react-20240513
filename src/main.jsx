/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */

import React from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "./constants/mock_copy";
import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/component";

const root = createRoot(document.getElementById("root"));

root.render(
  <Layout>
    <Restaurants restaurants={restaurants} />
  </Layout>
);