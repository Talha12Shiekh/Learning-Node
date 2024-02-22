import fs from "fs";

console.log("First line");


let FirstFileData = fs.readFile("text.txt",(err,fdata) => {
    if(err) return new Error("Unable to fetch the file");

    console.log(fdata.toString())
});

let secondFileData = fs.readFile("text copy.txt",(err,sdata) => {
    if(err) return new Error("Unable to fetch the file");

    console.log(sdata.toString())
});


console.log("Last line")

