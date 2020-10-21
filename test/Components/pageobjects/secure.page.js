const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }
    get APIlink() { return $('//a[text()="API"]');}
    get browserMethod() { return $('//a[text()="executeAsync"]');}
    get editButton() {return $('//a[text()="Edit"]')}
    clickApiLink(){
        this.APIlink.waitForClickable({
            timeout: 80000
        });
        this.APIlink.click();
    }

    verifyBrowserMethod(){
        this.browserMethod.waitForDisplayed({
            timeout: 80000
        });
        return this.browserMethod.isDisplayed();
    }

    clickBrowserMethod(){
        this.browserMethod.waitForClickable({
            timeout: 80000
        });
        this.browserMethod.click();
    }
    
    verifyEditButton(){
        return this.editButton.isDisplayed();
    }
}

module.exports = new SecurePage();
