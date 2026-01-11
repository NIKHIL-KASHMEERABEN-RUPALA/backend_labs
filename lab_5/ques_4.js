const url = require(`url`);

// const inputUrl = "https://example.com:8090/path/to/example.js?Name=Nikhil&Roll=301";

const inputUrl = "https://example.com:8090/abc/url?id=101&name=nikhil"


const path_url = url.parse(inputUrl,true);

console.log(path_url);  // gives answer in object format 



console.log(`\n\nThe protocol is ${path_url.protocol}\n\n`)
console.log(`\n\nThe hostname is ${path_url.hostname}\n\n`)

console.log(`\n\nThe pathname is ${path_url.pathname}\n\n`)

console.log(`\n\nThe query is ${JSON.stringify(path_url.query)}\n\n`);

console.log(`\n\nThe port is ${path_url.port}\n\n`)