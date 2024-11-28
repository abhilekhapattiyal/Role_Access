import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dbCon from './utils/db.js'
import AuthRoutes from './routes/Auth.js'
import AdminRoutes from './routes/AdminRoutes.js'
dotenv.config()
const PORT=process.env.PORT || 3000
const app=express()
app.use(express.json())
app.use(cors({
    credentials: true,
    origin:"http://localhost:5173"
    
}));
dbCon()
app.use(cookieParser())
app.use('/api/auth',AuthRoutes)
app.use('/api/admin',AdminRoutes)
app.get('/',(req,res)=>{
    res.send('Hello world')

})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})