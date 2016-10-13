var fs =require('fs');

fs.readFile(process.argv[2],'utf8',function(err,buffer){
var LineNumber=buffer.split('\n').length-1;
console.log(LineNumber);
});
