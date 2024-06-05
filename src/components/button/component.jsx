import { THEMES } from '../../context/theme/constants';
import { useTheme } from '../../context/theme/hooks';

export const Button = ({ children, onClick, disabled }) => {
    const { theme } = useTheme();

    return (
        <button
            style={{
                padding: '3px 7px',
                backgroundColor: theme === THEMES.default ? 'lightblue' : 'lightseagreen',
                borderColor: theme === THEMES.default ? 'lightblue' : 'lightseagreen'
            }}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};