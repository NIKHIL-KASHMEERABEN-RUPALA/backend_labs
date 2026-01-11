// create a program, that joins users , arjun , documents , projects into a single path using path.join
const path = require('path');

const joinedPath = path.join('users', 'arjun', 'documents', 'projects');

console.log(`Joined Path: ${joinedPath}`);