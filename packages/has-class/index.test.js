/* eslint no-magic-numbers: 0 */

import createElement from 'saladbar.utils/element';
import hasClass from './index';
import { of } from 'fluture';
import test from 'tape';

test('hasClass returns true when class exists on an element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = document.querySelector('.default');
  const result = hasClass('default', testEl);
  const expected = true;
  assert.equal(result, expected);
  assert.end();
});

test('hasClass returns false when class does not exists on an element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = document.querySelector('.default');
  const result = hasClass('not-real', testEl);
  const expected = false;
  assert.equal(result, expected);
  assert.end();
});

test('hasClass returns true when class exists on a future element', assert => {
  const document = createElement(1, { classes: 'default' });
  const futureEl = of(document.querySelector('.default'));
  const result = hasClass('default', futureEl);
  const expected = true;
  result.value(bool => assert.equal(bool, expected));
  assert.end();
});

test('hasClass returns false when class does not exists on a future element', assert => {
  const document = createElement(1, { classes: 'default' });
  const futureEl = of(document.querySelector('.default'));
  const result = hasClass('not-real', futureEl);
  const expected = false;
  result.value(bool => assert.equal(bool, expected));
  assert.end();
});
