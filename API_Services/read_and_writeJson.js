var fs = require('fs');

var readfile = "../test_data/read.json";
var writeFile= '../test_data/write.json';
var fee = require(readfile);
fs.readFile(readfile,function(err,read){
if(err) console.error(err);
var pass = JSON.parse(read);
console.log(pass);

fee["employee"].name="RajKumar";
fee.employee.role="Senior Test Engineer";
fee.employee.location= "DTP"


fs.writeFile(writeFile, JSON.stringify(fee,null,4),function(err,res){
            if(err) console.log(err);
            console.log(res);
        });

});