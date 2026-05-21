import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function ThemeButton(){
    const {theme, toggle} = useContext(ThemeContext)
    return(
        <div style={{textAlign:'center'}}>
            <button onClick={toggle}>
            {theme ==="light"? "switch to dark mode":"switch to light mode"}
        </button>
        </div>
    )
}
export default ThemeButton