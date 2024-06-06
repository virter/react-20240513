import { useMemo, useState } from 'react';
import { ThemeContext } from './context'
import { THEMES } from './constants';

export const ThemeContextProvider = ({ children }) => {
    const [ theme, setTheme ] = useState(THEMES.default);

    const contextValue = useMemo(
        () => ({
            theme,
            toggleTheme: () =>
                setTheme(
                    theme === THEMES.default ? THEMES.alternative : THEMES.default
                )
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};