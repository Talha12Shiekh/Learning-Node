import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const COURSES = [
    {id:1,name:"Javascript"},
    {id:2,name:"Python"},
    {id:3,name:"Java"},
];


app.get("/",(req,res) => {
   res.send("Learning Node js from Scaler Acadmey");
});

app.get("/courses/:course",(req,res) => {
    let course = COURSES.find(c => c.name === req.params.course);
    if(!course){
        res.status(404).send("The Course you are looking for does not exists");
    }else {
        res.send(`Welcome to the ${course.name} Course`)
    }
})

app.get("/contact",(req,res) => {
    res.send("Contact us at abc@gmail.com");
 }) 

app.listen(PORT,() => {
    console.log(`App listening at the port ${PORT}`)
})

