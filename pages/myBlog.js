module.exports = function(browser) {
  this.openBrowser = function() {
    browser
      .windowMaximize()
      .url('https://ratanshreshtha.github.io/')
      .waitForElementVisible('body', 1000);
    return browser;
  };

  // For blog posts page
  this.numberOfBlogPosts = function() {
    browser
      .assert.elementCount('article.post-preview', 4);
  };

  // For about page
  this.aboutPage = function() {
    browser
      .click('.nav > li:nth-child(2) > a:nth-child(1)');
  };
  this.checkHeading = function() {
    browser
      .assert.containsText('.page-heading > h1:nth-child(1)', 'About');
  };
  this.checkSubHeading = function() {
    browser
      .assert.containsText('.page-subheading', 'Just somethings about me.');
  };
  this.checkIRCNick = function() {
    browser
      .assert.containsText('.blog-post > p:nth-child(2) > strong:nth-child(1)', 'RatanShreshtha');
  };

  // For tags page
  this.tagsPage = function() {
    browser
      .click('.nav > li:nth-child(4) > a:nth-child(1)');
  };

  this.listBlogsWithTagTerminal = function() {
    browser
      .click('a.list-group-item:nth-child(1)');
  };

  this.openBlogWithTagTerminal = function() {
    browser
      .click('article.post-preview:nth-child(2) > div:nth-child(3) > a:nth-child(1)');
  };
  this.checkPostHeading = function() {
    browser
      .assert.containsText('.post-heading', 'Terminal Customization');
  };
  this.checkPostSubHeading = function() {
    browser
      .assert.containsText('.post-subheading', 'Make your terminal prompt look awesome and helpful.');
  };

  return this;
};
