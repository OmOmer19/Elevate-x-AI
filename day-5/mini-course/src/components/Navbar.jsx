import { Link } from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <h2>Mini Course</h2>
            <div style={{textAlign:"center",backgroundColor:"lightblue"}}>
                <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/about">About</Link>
            </div>
            </div>
        </nav>
    )
}
export default Navbar