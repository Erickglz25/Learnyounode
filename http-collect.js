var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
 

response.pipe(bl(function (err, content) {
    if (err) {
      return console.error(err)
    }
    
    console.log(content.toString().length)
    console.log(content.toString())
  }))
})
