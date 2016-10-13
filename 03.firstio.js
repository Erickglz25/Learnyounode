var fs = require('fs');
var buffer =fs.readFileSync(process.argv[2],'utf8').split('\n').length;
var LineNumber= buffer-1;
console.log(LineNumber);

