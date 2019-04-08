module.exports = function getHTML (options, callback) {
  var https = require('https');

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

};