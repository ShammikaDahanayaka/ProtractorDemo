describe("my calculator test cases", function() {
  
    it("addition test", function() {
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model('first')).sendKeys("2");
        element(by.model('second')).sendKeys("2");
        element(by.css('[ng-click="doAddition()"]')).click();
        let result = element(by.cssContainingText('.ng-binding','4'));
        expect(result.getText()).toEqual('4');
        browser.sleep(2000);
    });
  });