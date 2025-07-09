import { createContext, useCallback, useEffect, useState } from "react";
import type { ThemeContextType } from "../../types/theme-context";
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const[theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'; //en | es
        if(savedTheme){
            setTheme(savedTheme);
        }
        return () => {
            console.log('Theme provider unmount | destroy')
        }
    }, [])
    const toggleTheme = useCallback(() => {
        setTheme(theme => theme === 'light' ? 'dark' : 'light');
    }, []);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
export default ThemeProvider;