const express = require('express')
const app = express()
const port = 3000;
const blog = require("./Routes/blog");
const fs = require("fs");

app.use((req, res, next) => {
    req.takeTea = true;
    fs.appendFileSync("logs.txt", `Hello i am in first middlewear \n`)
    next()
}, (req, res, next) => {
    fs.appendFileSync("logs.txt", `Hello i am in second middlewear \n`)
    next()
}, (req, res, next) => {
    fs.appendFileSync("logs.txt", `Hello i am in third middlewear \n`)
    next()
}, (req, res, next) => {
    fs.appendFileSync("logs.txt", `Hello i am in fourth middlewear \n`)
    next()
}, (req, res, next) => {
    fs.appendFileSync("logs.txt", `Hello i am in fifth middlewear \n`)
    next()
}
)

app.use("/blog",blog);

app.get("/", (req, res) => {
    res.send(`Hello world i am learning middleware ${req.takeTea}`)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})