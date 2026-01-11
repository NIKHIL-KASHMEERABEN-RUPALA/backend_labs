// write a node js program that prints the directory name , filname , file extesnsion of the current file


const path = require('path');

const currentFile = __filename;

const dirName = path.dirname(currentFile);
const fileName = path.basename(currentFile);
const fileExt = path.extname(currentFile);


console.log(`Directory is : ${dirName}`);
console.log(`File Name is : ${fileName}`);
console.log(`File Extension is : ${fileExt}`);