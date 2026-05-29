import books from "../books"
import { Link } from "react-router-dom"
import { useContext, useMemo, useRef, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import BookCard from "../components/BookCard"

function BookList(){
    const [search,setSearch] = useState("")
    const {theme} = useContext(ThemeContext)
    const [category,setCategory] = useState("All")
    const inputRef = useRef(null)

    const filtered = useMemo(() =>{
        return books.filter((book) => {
            const titleMatch = book.title.toLowerCase().includes(search.toLowerCase())

            const categoryMatch = category==="All" || book.category===category

            return titleMatch && categoryMatch
        }
    )
    },[search,category])

    //getting unique categories from book data
    const categories = useMemo(() =>{
        const uniqueCategories = []

        for(let i=0;i<books.length;i++){
            const currentCategory = books[i].category

            if(!uniqueCategories.includes(currentCategory)){
                uniqueCategories.push(currentCategory)
            }
        }
        return uniqueCategories
    },[])

    const inputStyle ={
        padding: "10px",
        margin: "20px",
        width: "400px",
        borderRadius: "8px",
        border: "1px solid #e0d4c0",
        backgroundColor: theme === "light" ? "#fff8f0" : "#16213e",
        color: theme === "light" ? "#4a2e0e" : "white"
    }

    const buttonStyle = {
        backgroundColor: theme === "light" ? "#8B5E3C" : "#f5efe6",
        color: theme === "light" ? "#f5efe6" : "#4a2e0e",
        padding: "8px 16px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px",
    }

    const selectStyle = {
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #e0d4c0",
        backgroundColor: theme === "light" ? "#fff8f0" : "#16213e",
        color: theme === "light" ? "#4a2e0e" : "white",
        marginBottom: "20px"
    }

    return(
        <>
        <div style={{textAlign:"center"}}>
            <input type="text"
             placeholder="Search Books By Title"
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             style={inputStyle}
             ref={inputRef}/>
             {/*filter by categories */}
             <select value={category}
                     onChange={(e) => setCategory(e.target.value)}
                     style={selectStyle}>
                        <option value="All">All</option>
                        {categories.map((cat) =>(
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
             </select>
             {/* focus button */}
             <button onClick={() => inputRef.current.focus()}
                style={{...buttonStyle,marginBottom:"10px", marginLeft:"15px"}}>
                    Focus Search
             </button>
                     <p style={{marginBottom:"10px"}}>
                        Showing {filtered.length} results
                     </p>
        </div>
        {/* if no books found */}
        {filtered.length === 0 && (
            <p style={{textAlign:"center",padding:"20px",marginTop:"40px"}}>
                No books found
            </p>
        )}
        
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",padding:"20px"}}>
            {filtered.map((book) =>(
                <BookCard key={book.id} book={book}/>
            ))}
        </div>
        </>
    )
}
export default BookList