const path = require('path');

// absolute or relative path 

const somePath = '/projects/file.txt';

const absolutePath = path.resolve("folder1", "folder2", "file.txt");
console.log(absolutePath);
if(path.isAbsolute(absolutePath)){
    console.log("The given path is an absolute path");
}

console.log(`Absolute Path: ${absolutePath}`);



const a = path.normalize('/foo/bar//baz/../../..//test/')
console.log(a); 

console.log(path.join("hey ","there "," "));

console.log("\n");

console.log(path.resolve("hey","there","/how"));

console.log("\n");

console.log(path.relative("a/b/c/d","a/p/q/b"));
console.log("\n\n");

console.log(path.normalize("./arjun/bala/../../darshan.txt"));