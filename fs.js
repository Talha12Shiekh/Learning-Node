const {readFileSync,writeFileSync,appendFileSync,unlinkSync,mkdirSync,readdirSync,existsSync,rmdirSync,rmSync} = require("fs");
// reading a file

// const fileContent = readFileSync("./file1.txt",{encoding:"ascii"})

// writing file

// const writedFile = writeFileSync("./file1.txt","Hello World!")

// editing a file

// const appendedFile = appendFileSync("./file1.txt"," \n Nice to meet you")

// unlinkSync("file1.txt");

// console.log(appendedFile)

// Directories 

// mkdirSync("HELLO WORLD")

// check the content inside of directory

// let folderContent = readdirSync("C:\\Users\\Hp\\Documents\\NODE JS ULTIMATE COURSE\\HELLO WORLD")

// let exists = existsSync("C:\\Users\\Hp\\Documents\\NODE JS ULTIMATE COURSE\\HELLO WORLD")

// console.log(exists)

// let a = rmdirSync("HELLO WORLD"); // works with only empty directories

rmSync("C:\\Users\\Hp\\Documents\\NODE JS ULTIMATE COURSE\\HELLO WORLD",{recursive:true}); // this command deletes all files and subdirectories in HELL

// console.log(a);
