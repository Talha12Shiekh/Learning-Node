const fs = require("fs");

console.log("starting before creating the file")

// fs.writeFile("node1.txt", "Hello i am learning Node js from sigma web development course", () => {
    
//     fs.readFile("node1.txt",(err,data) => {
//         console.log(data.toString())
//     })
// })


// fs.appendFile("node1.txt","\nHello world",(err,data) => {
//     console.log(data)
// })

fs.open('talha.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });