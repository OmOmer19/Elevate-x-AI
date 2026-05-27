import About from "./pages/About"
import BookDetail from "./pages/BookDetail"
import BookList from "./pages/BookList"
import Home from "./pages/Home"
import SavedBooks from "./pages/SavedBooks"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import { Route,Routes } from "react-router-dom"

function App() {
 
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books" element={<BookList/>}/>
      <Route path="/saved" element={<SavedBooks/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/books/:bookId" element={<BookDetail/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
