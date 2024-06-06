/* eslint-disable react/jsx-key */

//import { ScrollProgressBar } from '../../scroll-progress-bar/component';
import { AuthorizationButton } from '../authorization-button/component';
import { ThemeToggler } from '../theme-toggler/component';

export const Header = ({ }) => {
    return (
        <header
            style={{
                position: 'sticky',
                left: '0',
                top: '0',
                width: '100%',
                paddingBottom: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.7)'
            }}
        >
            {/* <ScrollProgressBar /> */}
            <AuthorizationButton />
            <ThemeToggler />
        </header>
    );
};