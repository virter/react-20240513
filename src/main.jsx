/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "./constants/mock_copy";
import { Layout } from "./components/layout/component";
import { Tab } from "./components/tab/component";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <Layout>
      <Tab restaurants={restaurants} />
    </Layout>
  </div>
);