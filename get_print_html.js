var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

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

getAndPrintHTML()
