import About from "./pages/About"
import BookDetail from "./pages/BookDetail"
import BookList from "./pages/BookList"
import Home from "./pages/Home"
import SavedBooks from "./pages/SavedBooks"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import { Route,Routes } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

function App() {
 
  const {theme} = useContext(ThemeContext)

  const appStyle ={
    backgroundColor: theme === "light" ? "#f5efe6" : "#1a1a2e",
    color: theme === "light" ? "#4a2e0e" : "white",
    minHeight: "100vh"
  }
  
  return (
    <div style={appStyle}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books" element={<BookList/>}/>
      <Route path="/saved" element={<SavedBooks/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/books/:bookId" element={<BookDetail/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  )
}

export default App
