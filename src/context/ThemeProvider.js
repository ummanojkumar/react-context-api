import ThemeContext from "./ThemeContext";
import { React, useState } from 'react';

export const ThemeProvider = ({children})  => {
    const [theme, setTheme] = useState('light')

    const toogleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme, toogleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
