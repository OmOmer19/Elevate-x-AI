import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function Navbar(){
    const {theme} = useContext(ThemeContext)

    return(
        <div style={{textAlign:"center"}}>
            <h2>Current Theme: {theme}</h2>
        </div>
    )
}
export default Navbar