module.exports = {
  tags: ['custom_assertion'],
  'go to categories at RatBot ': function(browser) {
    browser
      .url('https://ratanshreshtha.github.io/categories/')
      .waitForElementVisible('body', 1000);
  },

  'Assert Number Of Categories': function(browser) {
    browser
      .assert.elementCount('.list-group-item', 1);
  },

  after: function(browser) {
    browser.end();
  }
};
