module.exports = {
  tags: ['custom_command'],
  'go to page with unload handler': function(browser) {
    browser
      .url('http://www.4guysfromrolla.com/demos/OnBeforeUnloadDemo1.htm')
      .waitForElementVisible('body', 1000);
  },

  'navigate away from page WITH unload handler': function(browser) {
    var hasDialog = false;

    browser
      .hasOnBeforeUnload(function(result) {
        this.verify.equal(result, true, 'The page should have an onbeforeunload handler');
        hasDialog = result;
      })
      .url('http://google.com', function() {
        if (hasDialog) {
          this.acceptAlert();
        }
      })
      .waitForElementVisible('body', 1000);

  },

  'go to nightwatch': function(browser) {
    browser.url('http://nightwatchjs.org')
      .waitForElementVisible('body', 1000);
  },

  after: function(browser) {
    browser.end();
  }
};
