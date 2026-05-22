import { useParams } from "react-router-dom"
import courses from "./courses"
import { use } from "react"


function CourseDetail(){
    const {courseId} = useParams()
    const actualCourse = courses.find(
        (course) => course.id === courseId
    )
    return(
        <div>
            <h1>Detail</h1>
            <h2>{actualCourse.title}</h2>
            <p>Duration:{actualCourse.duration}</p>
        </div>
    )
}
export default CourseDetail