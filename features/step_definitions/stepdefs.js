const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('today is Friday', () => {
    this.today = 'Friday';
  });
When('I ask whether it\'s Friday yet', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'Nope';
});
Then('I should be told {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'Nope';
});