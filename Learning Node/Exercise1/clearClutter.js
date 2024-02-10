const fs = require("fs");
const path = require("path");

// step1 : find all the files extensions in the current folder you want /

// step 2 : get those extensions /

// step 3 : make a folder of these extensions

// step 4 : move the files with particular extensions to that folders


function findExtensions(rootDirectory){
    const files = fs.readdirSync(rootDirectory);

    files.map((item,i) => {
        let ext = item.split(".")[item.split(".").length - 1];
        if(ext == "js") return;
        try {
            if(fs.existsSync(path.join(__dirname,ext))){
                if(item.includes(".")){   
                    fs.renameSync(path.join(__dirname,item),path.join(__dirname,ext,item))
                }
            }else {
                fs.mkdirSync(ext.toUpperCase());
                fs.renameSync(path.join(__dirname,item),path.join(__dirname,ext,item))
            }

        } catch (error) {
            console.log(error)
        }
    })
}

findExtensions(__dirname)