var fs=require('fs');
var path = require('path');

module.exports = function(directorio,ext,callback){
		fs.readdir(directorio,function(err,Datalist){

			if(err)
			   return callback(err);
			
			Datalist=Datalist.filter(function(file){
			   return path.extname(file) === '.' + ext;
			})
			callback(null,Datalist);
		})

}

