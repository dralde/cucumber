import {Given, When, Then} from 'cucumber';
import {expect} from 'chai';
const TIMEOUT = 5000;
const SWIPE_DIRECTION = {
  left: 'left',
  right: 'right',
  up: 'up',
  down: 'down',
};

Given(/^Wait for element: "([^"]*)?"$/, elId => {
  const el = $('~' + elId);
  expect(el.isDisplayed()).to.equal(true);
});

When(/^Click element: "([^"]*)?"$/, elId => {
  const el = $('~' + elId);
  el.click();

  expect($('~completed screen').isDisplayed()).to.equal(true);
});

Then(/^Wait for complete: "([^"]*)?"$/, elId => {
  const el = $('~' + elId);
  browser.waitUntil(() => el.isDisplayed());

  expect(el.isDisplayed()).to.equal(true);
});
