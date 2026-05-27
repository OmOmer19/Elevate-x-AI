import {Link} from "react-router-dom"

function Navbar(){
    return(
        // <div style={{textAlign:"center"}}>
            <div style={{display:"flex",gap:"40px",justifyContent:"center",alignItems:"center",padding:"15px 20px",backgroundColor:"#8cb6e0"}}>
                <Link style={{color:"black"}} to="/">Home</Link>
                <Link style={{color:"black"}} to="/books">BookList</Link>
                <Link style={{color:"black"}} to="/saved">Saved</Link>
                <Link style={{color:"black"}} to="/about">About</Link>
            </div>
        // </div>
    )
}
export default Navbar