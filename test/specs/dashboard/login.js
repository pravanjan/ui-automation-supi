var expect = require('chai').expect;
var assert = require ('assert');
//var logintest = require ('../logintest')
describe('Supi api', function(){
  this.timeout(99999999);
    it('should launch Supi api login page', function() {
        browser.url('https://qatesting-supi.appspot.com/');
        var title = browser.getTitle();
        assert.equal(title, 'Log in');

    });

    it('login and redirect to dashboard', function() {
//driver.findelements(By.id('username')).sendKeys('supi.sandhya@gmail.com')
//wait.until(ExpectedConditions.elementToBeClickable(By.id("username"))).clear();
      //browser.clearElement('#username');
      //var isEnabled = browser.isEnabled('.username');
          //console.log(isEnabled);
          //browser.waitForEnabled('#username', 3000);
     //browser.setValue('#username', 'supi.sandhya@gmail.com');
      //assert.equal(enter, 'user name');
      //var input = $('.username');
    //input.setValue('supi.sandhya@gmail.com');
    //var input1 = $('.password');
    //input.setValue('supi3lipi');
    //var isEnabled2 = browser.isEnabled('.password');
      //  console.log(isEnabled);

      //browser.waitForEnabled('#password', 3000);
    //browser.setValue('#password', 'supi3lipi');
    browser.click('#login-submit');
    var dashboard = browser.getTitle();
    assert.equal(dashboard, 'Starter Template for Bootstrap');

    });
    it('should navigate to sample demp page', function() {
      //browser.waitForVisible('#drag and drop', 3000);
    //browser.click('#navbar-brand');
    browser.url('https://qatesting-supi.appspot.com/asset/html/dashboard.html');
    var text2 = browser.getTitle();
    //assert.equal(text2, 'Starter Template for Bootstrap');
    console.log(text2);


    });

    it('should navigate to different page', function() {
      browser.url('https://qatesting-supi.appspot.com/asset/html/window.html');
      var text = browser.getTitle();
      assert.equal(text, 'This is to open differnt test');
    });

    it('should select the drag option and do the drag and drop', function() {
      //browser.waitForVisible('#drag and drop', 3000);
      browser.url('https://qatesting-supi.appspot.com/asset/html/drag.html');
      var text1 = browser.getTitle();
      assert.equal(text1, '');

    //assert.equal(title, 'Drag the image back and forth between the two div elements.')
    //drag the rabbit
    browser.dragAndDrop('#div1','#div2');


    });

  });
