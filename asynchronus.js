import fs from "fs";


fs.readFile("text.txt",(err,fdata) => {
    if(err) return new Error("Unable to fetch the file");

    console.log(fdata.toString());

    fs.readFile("text2.txt",(err,sdata) => {
        if(err) return new Error("Unable to fetch the file");
    
        console.log(sdata.toString())
    });
    
});




