var blog = require('../../pages/myBlog');

module.exports = {
  tags: ['blog'],
  before: function(browser) {
    blog(browser).openBrowser();
  },

  'Step 1: Blog Page': function(browser) {
    blog(browser).numberOfBlogPosts();
    browser.pause(1500);
  },

  'Step 2: About Page': function(browser) {
    blog(browser).aboutPage();
    browser.pause(1500);
    blog(browser).checkHeading();
    blog(browser).checkSubHeading();
    blog(browser).checkIRCNick();
  },

  'Step 3: Tags Page': function(browser) {
    blog(browser).tagsPage();
    browser.pause(1500);
    blog(browser).listBlogsWithTagTerminal();
    blog(browser).openBlogWithTagTerminal();
    blog(browser).checkPostHeading();
    blog(browser).checkPostSubHeading();
  },

  after: function(browser) {
    browser.end();
  }
};
