var request = require('request');
var assert = require('assert');
var AssertionError = require('assert').AssertionError;
var expected_statuscode = '201';
var expected_id = '101';

request.post('https://jsonplaceholder.typicode.com/posts', {
  json: {
    title: 'foo',
    body: 'bar',
     userId: 1
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
   console.log(`statusCode: ${res.statusCode}`)
  console.log('content-type:',res.headers['content-type']);
  console.log(body);
   var actualresult =res.statusCode;
   var id = body.id;
  //  console.log('userId:',body.id);
   

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

})