
exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  //
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  runner: "local",
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: [
    //  "./test/test-specs/pcm-rewrite/Troubleshoot/*.specs.js",
     // "./test/test-specs/pcm-rewrite/Case_Details/*.specs.js",
    //   "./test/test-specs/pcm-rewrite/Manage-Page-Specs/*.specs.js",
    //    "./test/test-specs/pcm-rewrite/Upload_DownloadFile/*.specs.js",
    //     "./test/test-specs/pcm-rewrite/Case-List-Specs/*.specs.js",
    //   './test/test-specs/pcm-rewrite/SecuredUsers/*.specs.js',
    //  './test/test-specs/pcm-rewrite/Sanity-Specs/*.specs.js'
    './test-specs/selenoid/*.specs.js'
  ],
  exclude: [
     //   "./test/test-specs/pcm-rewrite/Sanity-Specs/externalInternalTest.specs.js",
     //  './test/test-specs/pcm-rewrite/Case_Details/pinUnpin.specs.js',
    //'./test/test-specs/pcm-rewrite/SecuredUsers/*'
  ],
  //===================================================
  //=============Local configurations==================
  //===================================================
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      //
      maxInstances: 8,
      browserName: "chrome",
      acceptInsecureCerts: true,
      //browserVersion: '84.0',
      'selenoid:options': {
          enableVNC: true,
          enableVideo: true 
      }    
      // 'goog:chromeOptions': {
      //prefs: {
      //'directory_upgrade': true,
      //'prompt_for_download': false,
      //       //'download.default_directory': downloadDir
      //     }
      //},
      // args: ['--headless', '--disable-gpu'],
      // browserName: 'chrome'
    },
  ],
  //services: ["selenium-standalone"],
      // dockerOptions: {
      image: 'aerokube/selenoid:1.10.0',
      healthCheck: 'http://localhost:4444',
      options: {
          p: ['4444:4444'],
          shmSize: '2g'
      },
  //healthCheck: {
  //     url: 'http://localhost:4444',
  //     maxRetries: 10,
  //     inspectInterval: 100000,
  //     startDelay: 2000000
  // },
  // options: {
  //     e: ['NODE_ENV=development', 'PROXY=http://myproxy:80'],
  //     p: ['4444:4444', '5900:5900'],
  //     shmSize: '2g'
  // },

  //Patterns to exclude.
  //exclude: ['./test/test-specs/**/externalSecureSupportUser.specs.js',
  //'./test/test-specs/**/externalNonOrgAdminwithNoSupportEntitlement.specs.js'],

  // options
  //chromeDriverArgs: ['--port=9515', '--url-base=\'/\''], // default for ChromeDriver
  //chromeDriverLogs: './',

  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "error",
  bail: 0,
  // baseUrl: url.baseUrlSupport[ENV],
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 400000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 400000,
  //
  // Default request retries count
  connectionRetryCount: 10,
  
  framework: "mocha",
  reporters: [
    "dot",
    [
      "allure",
      {
        // If you are using the "allure" reporter you should define the directory where
        // WebdriverIO should save all allure reports.
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        useCucumberStepReporter: false,
      },
    ],
  ],

  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: "bdd",
    timeout: 400000,
    //require: ["babel-register"],
  },
};