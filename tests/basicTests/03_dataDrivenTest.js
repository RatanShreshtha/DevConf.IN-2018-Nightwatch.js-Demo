module.exports = {
  tags: ['google_data_driven'],
  'Google DevConf.In 2018': function(browser) {
    browser
      .url(browser.globals.url) // Go to a url
      .waitForElementVisible('body', 2000) // wait till page loads
      .assert.title('Google')  // Make sure Site title matches
      .saveScreenshot('screenshots/google_home_page,png')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', browser.globals.searchKeyword) // send values
      .waitForElementVisible('input[name=btnI]', 1000)
      .click('input[name=btnI]') // click on search button
      .pause(5000)
      .waitForElementVisible('body', 2000)
      .assert.title('DevConf.IN | August 4-5, 2018 - Bengaluru, India')
      .saveScreenshot('screenshots/DevConf_IN_home_page.png')
      .end();
  }
};
