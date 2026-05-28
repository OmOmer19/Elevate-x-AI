function About(){
    return(
        <div style={{textAlign:"center", padding:"40px 20px"}}>
            <div style={{fontSize:"48px"}}>📖</div>
            <h1 style={{fontSize:"32px", fontWeight:"500", marginTop:"10px"}}>About</h1>
            <p style={{marginTop:"10px", lineHeight:"1.7"}}>
                This is a Book Library app where users can explore books, view details and save their favourite books.
            </p>
            <h3 style={{marginTop:"20px", fontSize:"16px"}}>Main Features</h3>
            <div style={{marginTop:"6px", lineHeight:"2"}}>
                <p>🔍 Search books by title</p>
                <p>📂 Filter books by category</p>
                <p>📄 View full book details</p>
                <p>🔖 Save favourite books</p>
                <p>🌙 Light and Dark mode</p>
            </div>
        </div>
    )
}
export default About