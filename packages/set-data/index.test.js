/* eslint no-magic-numbers: 0 */

import { compose } from 'ramda';
import createElement from 'saladbar.utils/element';
import getData from 'saladbar.getdata';
import { of } from 'fluture';
import setData from './index';
import test from 'tape';

test('setData sets value of data property on single element', assert => {
  const document = createElement(1, {
    attrs: ['data-test="true"'],
    classes: 'default',
  });
  const testEl = document.querySelector('.default');
  const actual = compose(getData('test'), setData('test', 'false'));
  const expected = 'false';
  assert.equal(actual(testEl), expected);
  assert.end();
});

test('setData creates new data property if property not found on single element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = document.querySelector('.default');
  const actual = compose(getData('notReal'), setData('notReal', 'false'));
  const expected = 'false';
  assert.equal(actual(testEl), expected);
  assert.end();
});

test('setData returns error if data property is not a valid property name on single element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = document.querySelector('.default');
  const actual = setData('_notreal_', 'false', testEl);
  const expected = true;
  assert.equal(actual.hasOwnProperty('error'), expected);
  assert.end();
});

test('setData creates new data property if property not found on future element', assert => {
  const document = createElement(1, {
    attrs: ['data-test="true"'],
    classes: 'default',
  });
  const testEl = of(document.querySelector('.default'));
  const actual = compose(getData('test'), setData('test', 'false'));
  const expected = 'false';
  actual(testEl).value(attr => assert.equal(attr, expected));
  assert.end();
});

test('setData creates new data property if property not found on future element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = of(document.querySelector('.default'));
  const actual = compose(getData('notReal'), setData('notReal', 'false'));
  const expected = 'false';
  actual(testEl).value(attr => assert.equal(attr, expected));
  assert.end();
});

test('setData returns error if data property is not a valid property name on future element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = of(document.querySelector('.default'));
  const actual = setData('_notreal_', 'false', testEl);
  const expected = true;
  actual.fork(
    err => assert.equal(err.hasOwnProperty('error'), expected),
    () => assert.fail('setData passed with invalid property name.')
  );
  assert.end();
});
