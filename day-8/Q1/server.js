const express = require("express")
const app = express()

const PORT = 3000

app.use(express.json())

let tasks = [
  { id: 1, title: "Revise Node.js", completed: false },
  { id: 2, title: "Practice Express routes", completed: true }
];

app.get("/tasks",(req,res) => {
   res.status(200).json(tasks)
})

app.get("/tasks/:id",(req,res) =>{
    // cause here id is a number and in params it is a string
    const id = Number(req.params.id)
    const matched = tasks.find((task) => task.id === id)
    if(!matched){
      return  res.status(404).json({error:"Task not found"})
    }
    res.status(200).json(matched)
})

app.post("/tasks",(req,res) =>{
    const task = req.body
    if(!task.title){
        return res.status(400).json({message:"Please add title"})
    }
    const newTask = {
        id: tasks.length+1,
        title: task.title,
        completed:false //default to false
    }
    //adding to tasks
    tasks.push(newTask)
    res.status(201).json({newTask})
})

app.delete("/tasks/:id",(req,res) =>{
    // cause here id is a number and in params it is a string
    const id = Number(req.params.id)
    const matched = tasks.find((task) => task.id === id)
    if(!matched){
      return  res.status(404).json({error:"Task not found"})
    }
    tasks = tasks.filter((task) => task.id !== id)
    res.status(200).json({message:"deleted done"})
})

app.listen(PORT,() =>{
    console.log(`Server is running on ${PORT}`)
})