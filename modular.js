var modular = require("./modul01");
modular(process.argv[2],process.argv[3],function(err,content){
	if(err)
	{
	  return console.error("ERROR",err);
	
	}
	content.forEach(function(uniquefile){

		console.log(uniquefile);
	})
})
