import {Link} from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function Navbar(){
    const {theme,toggleTheme} = useContext(ThemeContext)

    const navStyle ={
        display:"flex",
        gap:"40px",
        justifyContent:"center",
        alignItems:"center",
        padding:"15px 20px",
        backgroundColor: theme === "light"?"#5a3825":"#111827" //"#8B5E3C":"#1a1a2e",
    }

    const linkStyle ={
        color: theme === "light" ? "#f5efe6" : "#e0c9b0",
        textDecoration:"none"
    }

    const buttonStyle ={
        padding: "8px 16px",
        borderRadius:"8px",
        border:"none",
        cursor:"pointer",
        backgroundColor: theme === "light" ? "#f5efe6" : "#8B5E3C",
        color: theme === "light" ? "#4a2e0e" : "#f5efe6",
        fontWeight:"500"
    }

    return(
        // <div style={{textAlign:"center"}}>
            <div style={navStyle}>
                <Link style={linkStyle} to="/">Home</Link>
                <Link style={linkStyle} to="/books">BookList</Link>
                <Link style={linkStyle} to="/saved">Saved</Link>
                <Link style={linkStyle} to="/about">About</Link>
                <button style={buttonStyle} onClick={toggleTheme}>
                    {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </button>
            </div>
        // </div>
    )
}
export default Navbar