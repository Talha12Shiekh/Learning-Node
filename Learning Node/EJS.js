const express = require("express");
const app = express();
const port = 3000;
app.set('view engine', 'ejs');

app.get("/",(req,res) => {
    let siteName = "TkClothing",searchText = "Search now";
    let array = ["Hello","How","Are","You"]
    res.render('index', {siteName,searchText,array})
});

app.listen(port,() => {
    console.log(`Example app running on the port ${port}`)
})