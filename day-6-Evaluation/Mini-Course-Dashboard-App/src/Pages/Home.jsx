import { Link } from "react-router-dom"

function Home(){
    return(
        <div style={{textAlign:"center"}}>
            <h2>Welcome to CourseNest</h2>
            <p>here you can browse all the tech courses</p>
            <Link to="/courses">Browse Courses</Link>
        </div>
    )
}
export default Home