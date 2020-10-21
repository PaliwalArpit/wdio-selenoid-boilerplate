const { assert } = require('chai');
const Page = require('../../test/Components/pageobjects/secure.page');
describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        browser.maximizeWindow();
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
        Page.clickApiLink();
        assert.strictEqual(Page.verifyBrowserMethod(), true, "Browser method should be present");
        Page.clickBrowserMethod();
        assert.strictEqual(Page.verifyEditButton(), true, "Edit button should be present");
    })
})