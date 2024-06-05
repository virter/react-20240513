/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const root = createRoot(document.getElementById("root"));

root.render(<App />);