/* eslint-disable react/jsx-key */

import { ScrollProgressBar } from "../../scroll-progress-bar/component";

export const Header = ({ }) => {
    return (
        <div style={{ position: 'sticky', left: '0', top: '0', width: '100%' }}>
            <ScrollProgressBar/>
        </div>
    );
};