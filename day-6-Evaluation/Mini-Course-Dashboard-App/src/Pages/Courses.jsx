import courses from "../courses";
import { Link } from "react-router-dom";
import { useState } from "react";

function Courses(){

    const [search, setSearch] = useState("")

    const filtered = courses.filter((course) => 
         course.title.toLowerCase().includes(search.toLowerCase())
    )
    return(
        <div style={{textAlign:"center",marginTop:"10px"}}>
             <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {filtered.map((course) =>(
                <div style={{textAlign:"center"}}
                key={course.id}>
                    <h2>{course.title}</h2>
                    <p>{course.category}</p>
                    <p>{course.duration}</p>
                    <p>{course.level}</p>
                    <h3 style={{fontWeight:"bold"}}>{course.price}</h3>
                    <Link to={`/courses/${course.id}`}>View Detail</Link>
                </div>
            ))}
        </div>
    )
}
export default Courses