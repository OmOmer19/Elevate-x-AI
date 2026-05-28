import { useNavigate } from "react-router-dom"
import { useContext, useMemo } from "react"
import { ThemeContext } from "../context/ThemeContext"
import books from "../books"


function Home(){
    const navigate = useNavigate()

    const {theme} = useContext(ThemeContext)

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

    const divStyle = {
        textAlign:"center",
        padding:"20px"
    }

    const cardStyle ={
        backgroundColor: theme === "light" ? "#fff8f0" : "#16213e",
        border: "1px solid #e0d4c0",
        borderRadius:"12px",
        padding:"40px 20px",
        maxWidth: "600px",
        margin: "0 auto"
    }

    const buttonStyle = {
        backgroundColor: theme === "light" ? "#8B5E3C" : "#f5efe6",
        color: theme === "light" ? "#f5efe6" : "#4a2e0e",
        padding: "12px 32px",
        border: "none",
        borderRadius: "8px",
        // marginBottom: "12px",
        cursor: "pointer",
        fontSize:"15px",
        marginTop:"16px"
    }

    const statBoxStyle ={
        backgroundColor: theme === "light" ? "#f5efe6" : "#1a1a2e",
        border: "1px solid #e0d4c0",
        borderRadius:"8px",
        padding:"16px",
        flex:"1"
    }

    const categoryBadgeStyle ={
        backgroundColor: theme === "light" ? "#f5efe6" : "#1a1a2e",
        border: "1px solid #c9a97a",
        color: theme === "light" ? "#6f4a2c" : "#e0c9b0",
        fontSize:"13px",
        padding:"6px 14px",
        borderRadius:"20px"
    }

    return(
        <div style={divStyle}>
            {/*main card */}
            <div style={cardStyle}>
                <div style={{fontSize:"48px"}}>📚</div>
                <h1 style={{fontSize:"32px", fontWeight:"500", marginTop:"10px"}}>
                    Book Library
                </h1>
                <p style={{color: theme === "light" ? "#7a5c3a" : "#a0a0b0", marginTop:"10px", lineHeight:"1.7"}}>
                    Explore a curated collection of books across programming, finance, fiction and more. Save your favourites and build your personal reading list.
                </p>
                <button onClick={() => navigate("/books")} 
                        style={buttonStyle}>
                            Explore Books →
                </button>
                {/* stats row */}
                <div style={{display:"flex",gap:"12px",marginTop:"24px"}}>
                    <div style={statBoxStyle}>
                        <div style={{fontSize:"24px", fontWeight:"500", color:"#8B5E3C"}}>
                            {books.length}
                        </div>
                        <div style={{fontSize:"13px", color: theme === "light" ? "#9a7a5a" : "#a0a0b0"}}>
                            Total Books
                        </div>
                    </div>
                    <div style={statBoxStyle}>
                        <div style={{fontSize:"24px", fontWeight:"500", color:"#8B5E3C"}}>
                            {categories.length}
                        </div>
                        <div style={{fontSize:"13px", color: theme === "light" ? "#9a7a5a" : "#a0a0b0"}}>
                            Categories
                        </div>
                    </div>
                </div>
            </div>
            {/* features section */}
            <div style={{display:"flex", gap:"12px", maxWidth:"600px", margin:"20px auto"}}>
                <div style={{...cardStyle, flex:"1", padding:"20px"}}>
                    <div style={{fontSize:"24px"}}>🔍</div>
                    <h3 style={{fontSize:"14px", marginTop:"8px"}}>Search & Filter</h3>
                    <p style={{fontSize:"13px", color: theme === "light" ? "#9a7a5a" : "#a0a0b0", marginTop:"4px"}}>
                        Find books by title or category
                    </p>
                </div>
                <div style={{...cardStyle,flex:"1",padding:"20px"}}>
                    <div style={{fontSize:"24px"}}>🔖</div>
                    <h3 style={{fontSize:"14px", marginTop:"8px"}}>Save Books</h3>
                    <p style={{fontSize:"13px", color: theme === "light" ? "#9a7a5a" : "#a0a0b0", marginTop:"4px"}}>
                        Bookmark your favourites
                    </p>
                </div>
                <div style={{...cardStyle,flex:"1",padding:"20px"}}>
                    <div style={{fontSize:"24px"}}>📄</div>
                    <h3 style={{fontSize:"14px", marginTop:"8px"}}>View Details</h3>
                    <p style={{fontSize:"13px", color: theme === "light" ? "#9a7a5a" : "#a0a0b0", marginTop:"4px"}}>
                        Read full book info
                    </p>
                </div>
            </div>
            {/* categories section */}
            <div style={{maxWidth:"600px", margin:"0 auto", textAlign:"left"}}>
                <p style={{fontSize:"13px", color:"#9a7a5a", marginBottom:"10px"}}>
                    BROWSE BY CATEGORY
                </p>
                <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
                    {categories.map((category) =>(
                        <span key={category} style={categoryBadgeStyle}>
                            {category}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Home