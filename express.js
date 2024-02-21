import express from "express";

import birds from "./middlewear.js";

import morgan from "morgan";


const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use('/birds', birds)

app.use(morgan());

let COURSES = [
    { id: 1, name: "Javascript" },
    { id: 2, name: "Python" },
    { id: 3, name: "Java" },
];


app.get("/", (req, res) => {
    res.send("Learning Node js from Scaler Acadmey");
});

app.put("/courses/:course", (req, res) => {
    let course = COURSES.find(c => c.name === req.params.course);
    if (!course) res.status(404).send("The Course you are looking for does not exists")

    course.name = req.body.name;
    res.send(`Welcome to the ${course.name} Course`)
});


const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

app.get('/example/d', [cb0, cb1], (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
}, (req, res) => {
    res.send('Hello from D!')
})















app.get('/ab?cd', (req, res) => {
    res.send('ab?cd')
})

app.get('/ab+cd', (req, res) => {
    res.send('ab+cd')
})

app.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
}, (req, res) => {
    res.send('Hello from B!')
})


//  app.delete("/courses/:course",(req,res) => {
//     let updatedCourses = COURSES.filter(c => c.name !== req.params.course);

//     COURSES = updatedCourses;

//     res.send(COURSES);
//  })

app.delete("/courses/:id", (req, res) => {
    let course = COURSES.find(c => c.id === Number(req.params.id));

    if (!course) res.status(404).send("The Course you are looking for does not exists")

    let index = COURSES.indexOf(course);

    COURSES.splice(index, 1);

    res.send(course);
})

app.get("/courses", (req, res) => {
    res.send(COURSES)
})

app.post("/courses", (req, res) => {
    let course = {
        id: COURSES.length + 1,
        name: req.body.name
    }
    COURSES.push(course);
    res.send(COURSES);
})

app.get("/courses/:course", (req, res) => {
    let course = COURSES.find(c => c.name === req.params.course);
    if (!course) {
        res.status(404).send("The Course you are looking for does not exists");
    } else {
        res.send(`Welcome to the ${course.name} Course`)
    }
})

app.get("/contact", (req, res) => {
    res.send("Contact us at abc@gmail.com");
})

app.listen(PORT, () => {
    console.log(`App listening at the port ${PORT}`)
})

