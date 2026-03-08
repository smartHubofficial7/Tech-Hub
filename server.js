const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/techhub")

const Order = mongoose.model("Order",{
name:String,
phone:String,
email:String,
address:String,
city:String,
state:String,
pincode:String,
products:Array
})

app.post("/order", async (req,res)=>{

const newOrder = new Order(req.body)

await newOrder.save()

res.json({message:"Order saved"})
})

app.get("/orders", async (req,res)=>{

const data = await Order.find()

res.json(data)

})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})
