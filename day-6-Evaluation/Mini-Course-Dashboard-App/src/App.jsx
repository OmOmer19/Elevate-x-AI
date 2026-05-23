import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Courses from "./Pages/Courses"
import About from "./Pages/About"
import NotFound from "./Pages/NotFound"
import SavedCourses from "./Pages/SavedCourses"
import { Route,Routes } from "react-router-dom"
import CourseDetail from "./Pages/CourseDetail"
import { ThemeContext } from "./context/ThemeContext"
import { useContext } from "react"


function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div style={{minHeight:"300px", backgroundColor:theme==="light"?"white":"black",
            color:theme==="light"?"black":"white"}}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/saved" element={<SavedCourses/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/courses/:courseId" element={<CourseDetail/>}/> 
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  )
}

export default App
