const os = require('os');

// console.log(os.cpus());

const cpuss = os.cpus();

cores = os.cpus().length;

console.log(cores);

// const Model = cores.model;

cpuss.forEach((index,cores)=>{

    console.log(`Core number is ${cores.model} and the Model is }`);

})