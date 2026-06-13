import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import User from './models/user.model.js'
import { connectDB } from './lib/db.js'
import { clerkMiddleware } from '@clerk/express'



const PORT = process.env.PORT
const FRONTEND_URL = process.env.FRONTEND_URL
const app  = express()

app.use(express.json())
app.use(clerkMiddleware())
app.use(cors({origin:FRONTEND_URL,credentials:true}))


app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running  at port ${PORT}`)
})