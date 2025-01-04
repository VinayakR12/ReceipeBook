import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import ItemRouter from './src/routes/itemRoute.js'
import CategoryRoute from './src/routes/categoryRoute.js';
import authRoutes from './src/routes/authRoutes.js';
import bodyParser from "body-parser";
import { authenticateUser } from './middleware.js'; 
import dotenv from 'dotenv';
dotenv.config();

const Port = process.env.PORT 
const DB_URL= process.env.DB_URL
const app= express()

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

async function main(){

mongoose.connect(DB_URL)
}
main().then(()=>{console.log("DB is connected...")}).catch(err=>console.log("new"+ err));


app.use('/api',ItemRouter)
app.use('/api/',CategoryRoute)
// app.use('/api/auth', authRoutes);


app.use('/api/auth/', authRoutes);

// Protected Route (Example)
app.get('/api/add-recipe', authenticateUser, (req, res) => {
  res.status(200).json({ message: 'Welcome to the Add Recipe page!' });
});


app.listen(Port,()=>{
    console.log(`it listing ${Port}`)
})