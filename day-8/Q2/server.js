const express = require("express")
const app = express()

app.use(express.json())

function authMiddleware(req,res,next){
    const token = req.headers.authorization

    if(token === "Bearer secret123"){
        next()
    }
    else{
        res.status(401).json({
            error:"Unauthorized access"
        })
    }
}

app.get("/public",(req,res) =>{
    res.status(200).json({message:"This is public"})
})

app.get("/profile",authMiddleware,(req,res) =>{
    res.status(200).json(
        { "name": "Student User",
           "role": "Developer"
        })
})

app.get("/dashboard",authMiddleware,(req,res) =>{
    res.status(200).json({message:"this is dashboard"})
})

const PORT = 3000

app.listen(PORT,() =>{
    console.log(`Server is running on ${PORT}`)
})