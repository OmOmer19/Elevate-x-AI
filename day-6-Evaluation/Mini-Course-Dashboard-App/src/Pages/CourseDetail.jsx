import { useParams } from "react-router-dom";
import courses from "../courses";

function CourseDetail(){
    const {courseId} = useParams()
     const actualCourse = courses.find(
        (course) => course.id == courseId
    )
    return(
        <div>
            <h2>Details</h2>
            <h3>{actualCourse.title}</h3>
            <p>Category: {actualCourse.category}</p>
            <p>Duration: {actualCourse.duration}</p>
            <p>Level: {actualCourse.level}</p>
            <p>Price: ₹{actualCourse.price}</p>
            <p>{actualCourse.description}</p>
            
        </div>

    )
}
export default CourseDetail