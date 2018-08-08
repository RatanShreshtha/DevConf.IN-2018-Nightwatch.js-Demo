module.exports = {
  tags: ['hello_world_steps'],
  'Hello, World: Step 1': function(browser) {
    browser
      .url('http://www.google.co.in') // Go to a url
      .waitForElementVisible('body', 2000) // wait till page loads
      .assert.title('Google') // Make sure Site title matches
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'Hello, World!') // send values
      .waitForElementVisible('input[name=btnK]', 1000)
  },

  'Hello, World: Step 2': function(browser) {
    browser
      .click('input[name=btnK]') // click on search button
      .pause(4000)
      .assert.containsText('#main', 'Hello, World!')
      .end()
  }
};
