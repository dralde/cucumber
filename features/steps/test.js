import {Given} from 'cucumber';
import {expect} from 'chai';
const TIMEOUT = 5000;
const SWIPE_DIRECTION = {
  left: 'left',
  right: 'right',
  up: 'up',
  down: 'down',
};
const waitFor = el => {
  $(el).waitForExist(TIMEOUT);

  const isVisible = $(el).isDisplayed();

  expect(isVisible).to.equal(true);
};

Given(/^Click element: "([^"]*)?"$/, elId => {
  $('~' + elId).click();
});

Given(/^Element log: "([^"]*)?"$/, elId => {
  const el = $('~' + elId);
  el.click();
  console.log();
  // browser.waitUntil(
  //   () => {

  //     el.click();
  //   },
  //   0,
  //   'wait for elemento',
  // );
});

Given(/^Wait for element: "([^"]*)?"$/, elId => {
  const el = '~' + elId;
  waitFor(el);
});
