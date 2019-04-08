var getHTML = require('../http_functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function printHTML (html) {
  console.log(html.replace(/you/ig, 'j00').replace(/ck/ig, 'x').replace(/o/ig, '0').replace(/er/ig, '0r').replace(/a/ig, '4').replace(/e/ig, '3').replace(/l/ig, '1').replace(/s/ig, '5').replace(/t/ig, '7'))
}

getHTML(requestOptions, printHTML)