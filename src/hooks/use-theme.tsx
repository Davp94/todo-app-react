import { useContext } from "react"
import { ThemeContext } from "../state-management/context/theme-provider"

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("Provider not defined")
    }
    return context;
}