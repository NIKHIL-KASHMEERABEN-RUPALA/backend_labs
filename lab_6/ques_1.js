const hey = require(`events`);
// this events is imported as a class and not as a object 

const obj1 = new hey();

obj1.on("Something something",()=>{
console.log("Event something something has been emitted");
})

// obj1.emit("Something something");

setInterval(()=>{
    obj1.emit("Something something");

},4000)