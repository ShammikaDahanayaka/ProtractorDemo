let homepage = function () {
    let fInput = element(by.model('first'));
    let sInput = element(by.model('second'));
    let sbtn = element(by.css('[ng-click="doAddition()"]'));

    this.get = function (url) {
        browser.get(url);
    }

    this.enterFNo = function (fnum) {
        fInput.sendKeys(fnum);
    }

    this.enterLNo = function (lnum) {
        sInput.sendKeys(lnum);
    }

    this.clickgo = function () {
        sbtn.click();
    }

    this.verifyno = function (output) {
        let result = element(by.cssContainingText('.ng-binding', output));
        expect(result.getText()).toEqual(output);
    }
}

module.exports = new homepage();