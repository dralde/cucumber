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
  browser.waitForExist(el, TIMEOUT);
  const isVisible = browser.isVisible(el);
  // ios visibility is done differently than Android
  let isFlattedVisible = Array.isArray(isVisible)
    ? !isVisible.find(visibility => !visibility)
    : isVisible;
  expect(isFlattedVisible).to.equal(true);
};

Given(/^Click element: "([^"]*)?"$/, elId => {
  browser.click('~' + elId);
});

Given(/^Click element with text: "([^"]*)?"$/, text => {
  // ios not supported
  browser.click(`//*[@text='${text}']`);
});

Given(/^Wait for element: "([^"]*)?"$/, elId => {
  const el = '~' + elId;
  console.log(el);
  waitFor(el);
});
