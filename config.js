let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');
var jasmineReporter = require('jasmine-reporters');
var HTMLReport = require('protractor-html-reporter-2');

exports.config = {
    framework: 'jasmine2',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        // 'specs/istockpoto.js',
        // 'specs/fileupload.js',
        // 'specs/loginOperation.js',
        'specs/searchbox.js'
    ],
    restartBrowserBetweenTests: true,
    // ignoreSynchronization: false,
    // SELENIUM_PROMISE_MANAGER: false,


//Run Only in Chrome Browser
    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            'args': ['disable-infobars']
        }
    },
//Run in both chrome and firefox browsers parallelly
    // multiCapabilities: [
    //     {
    //         'browserName': 'chrome',
    //         'chromeOptions': {
    //             'args': ['disable-infobars']
    //         }
    //     },
    //     {
    //         'browserName': 'firefox',
    //         'moz:firefoxOptions': {
    //             'args': ['--safe-mode']
    //         }
    //     }
    // ],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000,
        isVerbose: true,
        realtimeFailure: true,
        includeStackTrace: true,
    },

    onPrepare: function () {

        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,
        }));

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports/HtmlReport',
            takeScreenShotsOnlyForFailedSpecs: true,
            preserveDirectory: false,
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons'
        }).getJasmine2Reporter());

        jasmine.getEnv().addReporter(new jasmineReporter.JUnitXmlReporter({
            consolidateAll: true,
            savepath: 'testreport',
            fileprefix: 'xmloutput'
        }));

    },


    //HTMLReport called once tests are finished
    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');

            testConfig = {
                reportTitle: 'Manipal Global Test Execution Report',
                outputPath: './reports/',
                outputFilename: 'Pi_ChartReport',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('junitresults.xml', testConfig);
        });
    }

};