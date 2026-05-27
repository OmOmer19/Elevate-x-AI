import { useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate()
    return(
        <div style={{textAlign:"center",padding:"20px",backgroundColor:"lavender"}}>
            <h1>Book Library App</h1>
            <p style={{color: "#555" }}>here you can explore books, search them and save</p>
            <p >Total Books: 10</p>
            <p>Categories: Programming, Fiction, Finance</p>
            <button
             onClick={() => navigate("/books")}
             style={{backgroundColor:"#4caf50",padding:"10px 20px",
                     border:'none',borderRadius:"8px",color:"white",marginBottom:"12px",cursor:"pointer"}}>
                Explore Books
            </button>
        </div>
    )
}
export default Home