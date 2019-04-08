var https = require('https');

function getAndPrintHTML (options, callback) {

  var requestOptions = options

https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    data = ''
    response.on('data', function (chunk) {
      data += chunk
    })

    response.on('end', function(){
      callback(data)
    })

  })

}

function printHTML (html) {
  console.log(html)
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
}

getAndPrintHTML(requestOptions, printHTML)