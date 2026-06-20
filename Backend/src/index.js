import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import User from './models/user.model.js'

import fs from 'fs'
import path from 'path'

import { connectDB } from './lib/db.js'
import { clerkMiddleware } from '@clerk/express'



const PORT = process.env.PORT
const FRONTEND_URL = process.env.FRONTEND_URL
const PublicDir = path.join(process.cwd(),"public")


const app  = express()

app.use("/api/webhooks/clerk",express.raw({type: "application/json"}),clerkWebhook)
app.use(express.json())
app.use(cors({origin:FRONTEND_URL,credentials:true}))
app.use(clerkMiddleware())

if(fs.existsSync(PublicDir)){// only for deployment 
    app.use(express.static(PublicDir))
    app.get('/{*any}',(req,res,next)=>{
        res.sendFile(path.join(PublicDir,"index.html"),(err)=>next(err))
    })
}


app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running  at port ${PORT}`)
})