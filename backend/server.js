import express from 'express'
import cors from 'cors'

const app=express()
app.use(express.json())
app.use(cors())
app.post("/Contact",(req,resp)=>{
    console.log(req.body)
    resp.send({
        message:"DATA RECEIVED"
    })
})
app.listen(3000,()=>{console.log("server started")})