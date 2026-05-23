import {Link} from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"

function Navbar(){
    const {theme,toggle} = useContext(ThemeContext)

    return(
        <div style={{textAlign:"center"}}>
                <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/saved">Saved Courses</Link>
                <Link to="/about">About</Link>
                <button onClick={toggle}>Change Theme</button>
            </div>
            </div>
    )
}
export default Navbar