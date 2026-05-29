import { SavedContext } from "../context/SavedContext"
import { useContext, useMemo } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useNavigate } from "react-router-dom"

function SavedBooks(){
    const {savedBooks, removeBook} = useContext(SavedContext)
    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate()

    // total price - recalculate only when changes savedbooks
    const totalPrice = useMemo(() =>{
       return savedBooks.reduce((total,book) => {
          return  total + book.price
        },0)
    },[savedBooks])

    const cardStyle = {
        backgroundColor: theme === "light" ? "#fff8f0" : "#16213e",
        border: "1px solid #e0d4c0",
        borderRadius: "12px",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "12px"
    }

    const buttonStyle ={
        backgroundColor: theme === "light" ? "#8B5E3C" : "#f5efe6",
        color: theme === "light" ? "#f5efe6" : "#4a2e0e",
        padding: "8px 16px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px"
    }

    return(
        <div style={{padding:"20px",maxWidth:"700px",margin:"0 auto"}}>
            <h2 style={{textAlign:"center",marginBottom:"20px"}}>
                📌 Saved Books
            </h2>
            {/* when no save books */}
            {savedBooks.length === 0 ? (
                <div style={{textAlign:"center",marginTop:"40px"}}>
                    <p style={{textAlign:"center",marginTop:"40px"}}>
                        No saved books yet!
                    </p>
                    <button onClick={() => navigate("/books")} style={{...buttonStyle,marginTop:"25px"}}>
                        Explore Books
                    </button>
                </div>
            ) : (
                <div style={{textAlign:"center", marginBottom:"20px"}}>
                    <p>Total Saved: {savedBooks.length}</p>
                    <p>Total Price: {totalPrice}</p>
                </div>
            )}
            {/* showing saved books */}
            {savedBooks.map((book) =>(
                <div key={book.id} style={cardStyle}>
                    <img src={book.image} alt={book.title}
                    style={{width:"60px", height:"80px", objectFit:"contain", borderRadius:"8px"}} />
                    <div>
                        <h4>{book.title}</h4>
                        <p>Category:{book.category}</p>
                        <p>Price: {book.price}</p>
                    </div>
                    <button onClick={() => removeBook(book)} style={buttonStyle}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    )
}
export default SavedBooks