import mongoose from "mongoose";

const URL = "mongodb://0.0.0.0:27017/LearningMongoDB";

mongoose.connect(URL).then(_ => console.log("Connection successfull")).catch(err => console.error("Unable to connect",err));

const CourseSchema = new  mongoose.Schema({
    name:{type:String,required:true},
    creator:{type:String,required:true},
    description:{type:String,required:true},
    date:{type:Date,default:Date.now()},
    isDone:Boolean,
    isPublished:{type:String,required:true}
    rating:{type:Number,required:function(){return this.isPublished} }
})

let FirstCourse =  mongoose.model("FirstCourse",CourseSchema);



const course = new FirstCourse({
    name:"Python",
    creator:"Talha shiekh",
    description:"Ultimate python course including all the concepts of javascript from zero to advanced",
    isDone:false,
    isPublished:"No",
})

await course.save()




// console.log(resultedCourse);

// console.log("Talha shiekh")

// const findedCourse = await FirstCourse.find({rating:{$in:[0,1]}}).and([{name:"Python"},{rating:1}])

// console.log(findedCourse);

// async function UpdateCourse(id){
//     let course =  await FirstCourse.findById(id) ;
//     if(!course) return;

//     course.name = "JavaScript";
//     course.creator = "Harry bhai";

//     const updatedCourse = await course.save()

//     console.log(updatedCourse)
// }

// UpdateCourse("65f2cc34294e1c9be09d1ee7")

// async function DeleteCourse(id){
//     let DeletedCourse = await FirstCourse.findByIdAndDelete(id);

//     return DeletedCourse;
// }

// DeleteCourse("65f2cc34294e1c9be09d1ee7")