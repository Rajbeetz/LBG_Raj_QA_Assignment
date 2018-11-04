
var fs = require('fs');
xml2js = require('xml2js');
var readfile = "../test_data/read.xml";
var writeFile= '../test_data/write.xml';

var parser = new xml2js.Parser(),
    xmlBuilder = new xml2js.Builder();
    var parser = new xml2js.Parser();


    //to read xml file
fs.readFile(readfile, function(err, data) {
    if(err) console.log(err);
    parser.parseString(data, function (err, result) {

        console.log(result)    

//  to update the value of xml
        result.test.name = ['Rajkumar'];
        result.test.company = ['Wipro Technologies'];

        var xml = xmlBuilder.buildObject(result);

        // writing xml file 
        fs.writeFile(writeFile, xml,function(err,res){
            if(err) console.log(err);
            console.log('Modified the file and written ',res);
            
        });

    });
});


