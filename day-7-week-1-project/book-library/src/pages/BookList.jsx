import books from "../books"
import { Link } from "react-router-dom"
import { useState } from "react"

function BookList(){
    const [search,setSearch] = useState("")

    const filtered = books.filter((book) => 
        book.title.toLowerCase().includes(search.toLowerCase())
    )

    return(
        <>
        <div style={{textAlign:"center"}}>
            <input type="text"
             placeholder="Search Books By Title"
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             style={{padding:"10px",margin:"20px",width:"400px"}}/>
        </div>
        
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",padding:"20px"}}>
            {filtered.map((book) =>(
                <div style={{border:"1px solid black",padding:"15px",borderRadius:"8px",backgroundColor:"#eef4f6"}}
                key={book.id}>
                    <h4>Title:{book.title}</h4>
                    <p>category:{book.category}</p>
                    <p>author:{book.author}</p>
                    <p>rating:{book.rating}</p>
                    <p style={{fontWeight:"bold"}}>price:{book.price} Rs</p>
                   <div style={{display:"flex",gap:"5px"}}>
                    <Link to={`/books/${book.id}`}>View Details</Link>
                    <button>Save</button>
                   </div>

                </div>
            ))}
        </div>
        </>
    )
}
export default BookList