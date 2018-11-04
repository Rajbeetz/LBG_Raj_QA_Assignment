var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: '../report/cucumber-json-report.json',
        output: '../report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Mac 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        } 
    };


  
        reporter.generate(options);
    