import { useParams } from "react-router-dom"
import books from "../books"

function BookDetail(){
    const {bookId} = useParams()

    const matched = books.find((book) => bookId == book.id)
    
    if(!matched){
        return(
            <div style={{textAlign:"center",padding:"20px"}}>
                <h2>Book Not Found</h2>
            </div>
        )
    }

    return(
        <div style={{textAlign:"center",padding:"20px",border:"1px solid black",backgroundColor:"lightcyan"}}>
            <h3>Title:{matched.title}</h3>
            <p>category:{matched.category}</p>
            <p>author:{matched.author}</p>
            <p>rating:{matched.rating}</p>
            <p style={{fontWeight:"bold"}}>price:{matched.price} Rs</p>
            <button>Save</button>
        </div>
    )
}
export default BookDetail