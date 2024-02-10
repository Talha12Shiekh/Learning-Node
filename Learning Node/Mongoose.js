import express from "express";
import mongoose from "mongoose";
const app = express()
const port = 3000;
import { SingleTodo } from "./Modals/Todo.js";

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb://0.0.0.0:27017/Todos`);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error.message);
    }
  }

connectDB()


app.get('/', (req, res) => {
  const todo = new SingleTodo({title:"Complier",description:"It is a computer program that is responsible for the conversion of a program written in some high level programming langugage into machine language code"});
  todo.save() 
  res.send('Hello World!')
})

app.get('/about', async (req, res) => {
    const {title} = await SingleTodo.findOne({});
    res.send(title)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})