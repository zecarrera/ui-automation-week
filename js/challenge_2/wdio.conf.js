exports.config = {

    runner: 'local',
    specs: [
        './test/specs/**/*_spec.js'
    ],
    exclude: [
        './test/specs/**/challenge_2.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'error',  
    bail: 0,
    baseUrl: 'https://automationintesting.online/#/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    screenshotPath: "./errorShots",
    afterTest: function (test, context, {error, passed, retries}) {
        if (!passed) {
            const testName = test.parent.join(test.title);
            const filePath = path.join(this.screenshotPath, `${testName}.png`);

            browser.saveScreenshot(filePath);
        }
   }
}
