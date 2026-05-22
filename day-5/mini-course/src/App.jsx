import { Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./home"
import CourseDetail from "./CourseDetail"
import Courses from "./Courses"
import About from "./About"
import NotFound from "./NotFound"


function App(){
  return(
    <div style={{textAlign:"center"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:courseId" element={<CourseDetail/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}
export default App