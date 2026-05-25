const express = require("express")
const app = express()

app.use(express.json())

let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 800 }
];

app.get("/products",(req,res) =>{
    res.status(200).json(products)
})

app.get("/products/:id",(req,res,next) =>{
    // cause here id is a number and in params it is a string
    const id = Number(req.params.id)
    const matched = products.find((product) => product.id ===id)
    if(!matched){
       const err = new Error("Product not found")
       err.statusCode = 404
       return next(err)
    }
    res.status(200).json(matched)
})

app.post("/products",(req,res,next) =>{
    const product = req.body
    if(!product.name || product.price===undefined || isNaN(product.price)){
        const err = new Error("Please give correct input")
        err.statusCode = 400
        return next(err)
    }
    const newProduct = {
        id: products.length +1,
        name:product.name ,
        price: Number(product.price)
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})

// global error handler
app.use((err,req,res,next) =>{
    res.status(err.statusCode || 500).json({
        error: err.message || "Something went wrong"
    })
})

const PORT = 3000

app.listen(PORT,() =>{
    console.log(`Server is running on ${PORT}`)
})
