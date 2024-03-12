import mongoose from "mongoose";

const URL = "mongodb://0.0.0.0:27017/LearningMongoDB";

mongoose.connect(URL).then(_ => console.log("Connection successfull")).catch(err => console.error("Unable to connect",err));

const CourseSchema = new  mongoose.Schema({
    name:String,
    creator:String,
    description:String,
    date:{type:Date,default:Date.now()},
    isDone:Boolean
})

let FirstCourse =  mongoose.model("FirstCourse",CourseSchema);

const course = new FirstCourse({
    name:"Python",
    creator:"Talha shiekh",
    description:"Ultimate python course including all the concepts of javascript from zero to advanced",
    isDone:false
})

let resultedCourse = await course.save();

console.log(resultedCourse)