const express = require('express')
const app = express()
const port = 3000;
const blog = require("./Routes/blog");


app.use((req,res,next) => {
  console.log("m1");
  next()
})
app.use((req,res,next) => {
  console.log("m2");
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
});


// app.use(express.static('public'))
// app.use("/blog",blog);



app.get("/",(req,res) => {
    // res.send(`Hello ${req.params.slug} and query ${JSON.stringify(req.query)}`)
    console.log(`app listening to a get request`)
});


app.post("/",(req,res) => {
  res.send(`app listening to a post request`)
  console.log(`app listening to a post request`)
})

app.get("/index",(req,res) => {
  // res.sendFile("public/hello.html",{root:__dirname});
  res.download("public/hello.html",(err) => {
    console.log(err)
  })
})

app.get("/api",(req,res) => {
  // res.redirect("https://talhawebsite.netlify.app")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})