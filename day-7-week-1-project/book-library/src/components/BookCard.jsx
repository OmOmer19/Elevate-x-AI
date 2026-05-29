import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { memo } from "react";
import { SavedContext } from "../context/SavedContext";


function BookCard({book}){
    const {theme} = useContext(ThemeContext)
    const {saveBook} = useContext(SavedContext)

    const cardStyle = {
        backgroundColor: theme === "light" ? "#fff8f0" : "#16213e",
        border: "1px solid #e0d4c0",
        borderRadius: "12px",
        padding: "15px",
        textAlign: "center"
    }

    const buttonStyle = {
        backgroundColor: theme === "light" ? "#8B5E3C" : "#f5efe6",
        color: theme === "light" ? "#f5efe6" : "#4a2e0e",
        padding: "8px 16px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px"
    }
    
    const linkStyle = {
        backgroundColor: theme === "light" ? "#f5efe6" : "#8B5E3C",
        color: theme === "light" ? "#4a2e0e" : "#f5efe6",
        padding: "8px 16px",
        borderRadius: "8px",
        textDecoration: "none",
        fontSize: "14px"
    }
    return(
        <div style={cardStyle}>
            <img src={book.image} alt={book.title}
            style={{width:"100%", height:"150px", objectFit:"contain", borderRadius:"8px", marginBottom:"8px"}} />
            <h4>{book.title}</h4>
            <p>Category: {book.category}</p>
            <p>Author: {book.author}</p>
            <p>Rating: {book.rating} ⭐</p>
            <p style={{fontWeight:"bold"}}>Price: {book.price} Rs</p>

            <div style={{display:"flex", gap:"8px", marginTop:"10px", justifyContent:"center"}}>
                <Link to={`/books/${book.id}`} style={linkStyle}>
                    View Details
                </Link>
                {/* save button*/}
                <button onClick={() => saveBook(book)} style={buttonStyle}>
                    Save
                </button>
            </div>
        </div>
    )
}

//wrapping the component at export so only re-render on props change and
export default memo(BookCard)