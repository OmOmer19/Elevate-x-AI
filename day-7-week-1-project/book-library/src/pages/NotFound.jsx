import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function NotFound(){
    const {theme} = useContext(ThemeContext)

    const divStyle = {
        textAlign: "center",
        padding: "40px 20px",
    }

    return(
        <div style={divStyle}>
            <h2 style={{fontSize:"20px", marginTop:"10px"}}>404 Page Not Found</h2>
        </div>
    )
}
export default NotFound