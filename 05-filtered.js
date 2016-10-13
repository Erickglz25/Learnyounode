var fs= require('fs');
var path = require('path');

fs.readdir(process.argv[2],function(err,content){
 
  content.forEach(function(datalist){
  	if(path.extname(datalist) === '.'+process.argv[3])
	console.log(datalist);

  })

})
