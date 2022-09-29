let homepage = require('../pages/homepage');
describe("my calculator test cases", function () {

    it("addition test", function () {
        //browser.get("http://juliemr.github.io/protractor-demo/");
        homepage.get("http://juliemr.github.io/protractor-demo/");

        //element(by.model('first')).sendKeys("2");
        homepage.enterFNo('4');

        //element(by.model('second')).sendKeys("2");
        homepage.enterLNo('3');

        //element(by.css('[ng-click="doAddition()"]')).click();y
        homepage.clickgo();

        //let result = element(by.cssContainingText('.ng-binding','4'));
        //expect(result.getText()).toEqual('4');
        homepage.verifyno('7');

        browser.sleep(2000);
    });

    it("substraction test", function () {
        //browser.get("http://juliemr.github.io/protractor-demo/"); test
        homepage.get("http://juliemr.github.io/protractor-demo/");

        //element(by.model('first')).sendKeys("2");
        homepage.enterFNo('4');

        //element(by.model('second')).sendKeys("2");
        homepage.enterLNo('2');

        //element(by.css('[ng-click="doAddition()"]')).click();y
        homepage.clickgo();

        //let result = element(by.cssContainingText('.ng-binding','4'));
        //expect(result.getText()).toEqual('4');
        homepage.verifyno('7');

        browser.sleep(2000);
    });
});