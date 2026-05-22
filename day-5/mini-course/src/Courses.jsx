import { Link } from "react-router-dom"
import courses from "./courses"


function Courses(){
   return(
    <div>
        <h1>Courses</h1>
        {courses.map((course) => (
                <div key={course.id} style={{padding:"10px"}}>
                    <h2>{course.title}</h2>
                    <p>Duration: {course.duration}</p>
                    <Link to={`/courses/${course.id}`}>
                    View Detail</Link>
                </div>
            
        ))}
    </div>
   )
}
export default Courses