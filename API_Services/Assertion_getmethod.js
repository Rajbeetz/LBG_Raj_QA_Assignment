// var https = require('https');
var request = require('request');
var assert = require('assert');
var AssertionError = require('assert').AssertionError;

var expected_statuscode = '200';
var expected_id = '1';

request.get('https://jsonplaceholder.typicode.com/posts/1', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the body
  console.log('content-type:',response.headers['content-type']);
  // console.log('body node',body.id.toString());

   var actualresult = response.statusCode    
    var parse= JSON.parse(body);
    var id = parse.id;
    // console.log('value of id',id);
  var assertion = (Actualresult,expectedresult  ) => {
    try {
      assert(Actualresult !== expectedresult, 'exception')
      assert.equal(Actualresult,expectedresult);
      console.log("values matching"+ Actualresult,'=',expectedresult);
    } catch(e) {
        if (e instanceof AssertionError) {
            // Output expected AssertionErrors.
            console.log(e ,'values not matching',+ Actualresult,'=',expectedresult);
          } else {
            // Output unexpected Errors.
            console.log(e);
          }
    }
  }
  assertion(actualresult,expected_statuscode);
  assertion(id,expected_id);

});


