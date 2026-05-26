const express = require("express")
const app = express()

app.use(express.json())

const students = [
  { id: 1, name: "Aman", course: "Backend" },
  { id: 2, name: "Riya", course: "Frontend" },
  { id: 3, name: "Kabir", course: "Full Stack" }
]

//logger middleware
function loggerMiddleware(req,res,next){
    console.log(`${req.method} request came to ${req.url}`)
    next()
}
app.use(loggerMiddleware)

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Student Portal")
})

app.get("/about",(req,res) =>{
    res.status(200).send("This portal is used to manage student data")
})

app.get("/students",(req,res) =>{
    res.status(200).json(students)
})

app.get("/students/:id",(req,res)=>{
    const id = req.params.id
    const matched = students.find((student) => student.id == id)
    if(!matched){
        return res.status(404).json({message:"Student Not Found"})
    }
    res.status(200).json(matched)
})

app.post("/login",(req,res) =>{
    res.status(200).json({ message: "Login route called" })
})

const PORT = 3000

app.listen(PORT,() =>{
    console.log(`Server is running on ${PORT}`)
})
