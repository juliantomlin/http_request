var https = require('https');

function getAndPrintHTML (options) {

  var requestOptions = options

https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    data = ''
    response.on('data', function (chunk) {
      data += chunk
    })

    response.on('end', function(){
      console.log(data)
    })

  })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
}

getAndPrintHTML(requestOptions)