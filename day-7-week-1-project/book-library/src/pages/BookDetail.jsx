import { useParams } from "react-router-dom"
import books from "../books"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useNavigate } from "react-router-dom"

function BookDetail(){
    const {bookId} = useParams()
    const navigate = useNavigate()
    const {theme} = useContext(ThemeContext)

    const matched = books.find((book) => bookId == book.id)
    
    if(!matched){
        return(
            <div style={{textAlign:"center",padding:"40px 20px"}}>
                <h2>Book Not Found</h2>
                <button onClick={() => navigate("/books")}>
                    Back to Books
                </button>
            </div>
        )
    }

    const cardStyle = {
        backgroundColor: theme === "light" ? "#fff8f0" : "#16213e",
        border: "1px solid #e0d4c0",
        borderRadius: "12px",
        padding: "40px 20px",
        maxWidth: "600px",
        margin: "40px auto",
        textAlign: "center"
    }

    const buttonStyle ={
        backgroundColor: theme === "light" ? "#8B5E3C" : "#f5efe6",
        color: theme === "light" ? "#f5efe6" : "#4a2e0e",
        padding: "10px 24px",
        border: "none",
        borderRadius: "8px",
        fontSize: "14px",
        cursor: "pointer",
        marginTop: "16px",
        marginRight: "10px"
    }

    return(
        <div style={{padding:"20px"}}>
            <div style={cardStyle}>
                <div style={{fontSize:"48px"}}>
                    <img src={matched.image} alt={matched.title}
                     style={{width:"150px", height:"200px", objectFit:"contain", borderRadius:"8px"}}/>
                </div>
                <h1 style={{fontSize:"28px", fontWeight:"500", marginTop:"10px"}}>
                    {matched.title}
                </h1>
                <p style={{color: theme === "light" ? "#7a5c3a" : "#a0a0b0", marginTop:"6px"}}>
                    by {matched.author}
                </p>
                <div style={{marginTop:"16px",lineHeight:"2"}}>
                    <p>📂 Category: {matched.category}</p>
                    <p>⭐ Rating: {matched.rating}</p>
                    <p>💰 Price: {matched.price} Rs</p>
                </div>
                <p style={{color: theme === "light" ? "#7a5c3a" : "#a0a0b0", marginTop:"16px", lineHeight:"1.7"}}>
                    {matched.description}
                </p>
                <div style={{marginTop:"20px"}}>
                    <button onClick={() => navigate("/books")} style={buttonStyle}>
                        ← Back to Books
                    </button>
                    <button style={buttonStyle}>
                        🔖 Save Book
                    </button>
                </div>
            </div> 
        </div>
    )
}
export default BookDetail