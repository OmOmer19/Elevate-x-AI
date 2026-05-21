import ThemeButton from "./ThemeButton";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function Content(){
    const {theme} = useContext(ThemeContext)
    return(
        <div style={{textAlign:"center", backgroundColor: theme==="light"?"white":"black",
                                         color:theme==="light"?"black":"white",
                                         padding:"20px",height:"30px"
        }}>
            <ThemeButton/>

        </div>
    )
}
export default Content