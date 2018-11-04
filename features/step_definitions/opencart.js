var { Before, Given, When, Then,AfterAll} = require('cucumber')

var seleniumWebdriver = require('selenium-webdriver');

test = require('selenium-webdriver/testing');

var login = require('../App_action/opencart_Action.js');



Given('user login in to opencart application using invalid creditials {string} and {string}',function (username, password) {
   
  login.crediential(username,password);
  
  });


  When('user clicks on submit button', function () {
  
  login.click_submit();  
  
  });


  Then('verify the error message and close the browser', function () {
    login.Verify_msg();
  });





