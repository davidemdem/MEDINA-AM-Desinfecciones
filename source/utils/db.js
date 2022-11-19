//hacer funcion write y read.

const fs = require('fs');

const read =fs.readFileSync('/../user.json','utf-8');
const readUsers=JSON.parse(read);


module.exports = {readUsers }