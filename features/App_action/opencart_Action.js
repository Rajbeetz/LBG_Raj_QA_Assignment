var seleniumWebdriver = require('selenium-webdriver');
var By = seleniumWebdriver.By
var chromedriver = require('chromedriver');
var url = "https://demo.opencart.com";
var assert = require('assert');
var util = require('util');
var until = require('selenium-webdriver').until;
var promise = require('selenium-webdriver').promise;
var driver

class opencart_login 
{

    constructor(){
        driver = new seleniumWebdriver.Builder().withCapabilities({
          browserName: 'chrome',
          javascriptEnabled: true,
          acceptSslCerts: true,
          chromeOptions: {
              args: ['start-maximized', 'disable-extensions']
          },
          path: chromedriver.path
      }).build();
      }

      crediential(username, password){
        driver.get(url);
        driver.wait(until.elementLocated(By.xpath("//a[text()='Your Store']")),5*1000);
        driver.wait(check_title,5*1000);

        function check_title(){
           var promise= driver.getTitle().then((title)=> {
                var expectedTitle="Your Store";
                console.log("title of the page"+title);
          
                  if(expectedTitle ===title){
                    console.log("Verification Successful - The correct title is displayed on the web page.",title);
                    return true
                }
                else{
                    console.log("Verification Failed - An incorrect title is displayed on the web page.",title);
                }
            }); 
            return promise;
        }
          
    

              driver.findElement(By.xpath("//a[@title='My Account']")).then(Account=>{
                Account.click();
                console.log('clicked Account link')

                  driver.wait(until.elementLocated(By.xpath("//a[text()='Login']")), 5 * 1000).then(login => {  
                   login.click();
                   console.log('clicked login link for entering creditienals');
                  });

              });
              driver.wait(until.elementLocated(By.xpath("//h2[text()='Returning Customer']")), 5 * 1000).then(verify => {   
              verify.getText();
              console.log('navigated to login page');    
               });
               
               driver.wait(until.elementLocated(By.name("email")), 5 * 1000).then(user => {   
                user.sendKeys(username);
              });
                
              driver.wait(until.elementLocated(By.name("password")), 5 * 1000).then(pass => {   
                  pass.sendKeys(password);
                });       
      }

      click_submit(){
             
           driver.wait(until.elementLocated(By.xpath("//input[@value='Login']")), 5 * 1000).then(submit => {   
              submit.click();
              console.log('clicked on submit button');
      });
      }

      Verify_msg(){
       driver.wait(until.elementLocated(By.xpath("//div[text()=' Warning: No match for E-Mail Address and/or Password.']")),10*1000).then(msg=>{
         msg.getText().then(text=>{
            console.log("verifying error msg displayed  ",text);  
            driver.quit();
            console.log('closed the browser');
           })

     })
     
      }


}

module.exports = new opencart_login;