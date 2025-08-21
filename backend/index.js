import express from "express"
let port = 8000 
let app = express()
app.get("/",(req,res)=>{
    res.send("Hello form server")
})
app.listen(port,()=>{
    console.log("server started")
})