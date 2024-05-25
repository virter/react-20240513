/* eslint-disable react/jsx-key */
import { useState } from "react";

import { Restaurant } from "../restaurant/component";

export const Tab = ({ restaurants }) => {
    const [ rId, setId ] = useState(0);

    return <div>
        <div>
            {restaurants.map((item, index) => (
                <button key={index} onClick={() => setId(index)}>{item.name}</button>
            ))}
        </div>
        <Restaurant restaurant={restaurants[rId]} />
    </div>;
};