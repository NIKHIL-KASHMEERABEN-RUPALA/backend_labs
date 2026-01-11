const url = require(`url`)

const hey = new URL("https://example.com:8090/abc/url")

hey.searchParams.append('id', '101');
hey.searchParams.append('Name','Nikhil')

console.log(hey.searchParams);

console.log(hey.href);
console.log(hey.toString());
