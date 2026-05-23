import { createContext,useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) =>{
    const [theme,setTheme] = useState("light")
    function toggle(){
        if(theme==="light"){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }
    return(
        <ThemeContext.Provider value={{theme,toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeContext, ThemeProvider}