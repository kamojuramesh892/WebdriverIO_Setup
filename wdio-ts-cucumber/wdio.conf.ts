import allureReporter from '@wdio/allure-reporter'

const platform = process.env.PLATFORM

export const config: WebdriverIO.Config = {

    runner: 'local',
    tsConfigPath: './tsconfig.json',

    specs: [
        './features/**/*.feature'
    ],

    exclude: [],

    maxInstances: 10,

    //
    // ✅ WEB + MOBILE CAPABILITIES
    //
    capabilities:

        platform === 'android'
            ? [{
                platformName: 'Android',
                'appium:deviceName': 'emulator-5554',
                'appium:udid': 'emulator-5554',
                'appium:automationName': 'UiAutomator2',
                'appium:app': './apps/app-qa-debug.apk',
                'appium:autoGrantPermissions': true
            }]

            : platform === 'ios'
                ? [{
                    platformName: 'iOS',
                    'appium:deviceName': 'iPhone 15',
                    'appium:platformVersion': '17.0',
                    'appium:automationName': 'XCUITest',
                    'appium:app': './apps/app-qa-debug.ipa',
                    'appium:autoAcceptAlerts': true
                }]

                : [{
                    browserName: 'chrome'
                }],

    //
    // ✅ SERVICES
    //
    services: [
        ['appium', {
            command: 'appium'
        }]
    ],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'cucumber',

    reporters: [
        'spec',
        ['allure', { outputDir: 'allure-results' }]
    ],

    //
    // ✅ CLEAN ALLURE RESULTS BEFORE RUN
    //
    onPrepare: function () {
        const fs = require('fs');
        const path = require('path');

        const resultsPath = path.join(process.cwd(), 'allure-results');
        if (fs.existsSync(resultsPath)) {
            fs.rmSync(resultsPath, { recursive: true, force: true });
        }
    },

    //
    // ✅ ATTACH SCREENSHOT FOR EVERY STEP
    //
    afterStep: async function (step) {

    try {
        const screenshot = await browser.takeScreenshot();

        allureReporter.addAttachment(
            `Step Screenshot - ${step.text}`,
            Buffer.from(screenshot, 'base64'),
            'image/png'
        );

    } catch (err) {
        console.log('Screenshot capture failed:', err);
    }
},

    cucumberOpts: {
        require: ['./features/step-definitions/steps.ts'],
        backtrace: false,
        requireModule: [],
        tagExpression: '',
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },

    //
    // ✅ RELOAD SESSION AFTER EACH SCENARIO
    //
    afterScenario: async () => {
        await browser.reloadSession();
    }

}