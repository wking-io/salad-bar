/* eslint no-magic-numbers: 0 */

import { compose } from 'ramda';
import createElement from 'saladbar.utils/element';
import getAttr from 'saladbar.getattr';
import { of } from 'fluture';
import setAttr from './index';
import test from 'tape';

test('setAttr sets value of attribute on single element', assert => {
  const document = createElement(1, {
    attrs: ['aria-expanded="false"'],
    classes: 'default',
  });
  const testEl = document.querySelector('.default');
  const actual = compose(
    getAttr('aria-expanded'),
    setAttr('aria-expanded', 'true')
  );
  const expected = 'true';
  assert.equal(actual(testEl), expected);
  assert.end();
});

test('setAttr creates new attr if attribute not found on single element', assert => {
  const document = createElement(1, {
    attrs: ['aria-expanded="false"'],
    classes: 'default',
  });
  const testEl = document.querySelector('.default');
  const actual = compose(getAttr('not-real'), setAttr('not-real', 'false'));
  const expected = 'false';
  assert.equal(actual(testEl), expected);
  assert.end();
});

test('setAttr sets value of attribute on future element', assert => {
  const document = createElement(1, {
    attrs: ['aria-expanded="false"'],
    classes: 'default',
  });
  const testEl = of(document.querySelector('.default'));
  const actual = compose(
    getAttr('aria-expanded'),
    setAttr('aria-expanded', 'true')
  );
  const expected = 'true';
  actual(testEl).value(attr => assert.equal(attr, expected));
  assert.end();
});

test('setAttr creates new attr if attribute not found on future element', assert => {
  const document = createElement(1, {
    attrs: ['aria-expanded="false"'],
    classes: 'default',
  });
  const testEl = of(document.querySelector('.default'));
  const actual = compose(getAttr('not-real'), setAttr('not-real', 'false'));
  const expected = 'false';
  actual(testEl).value(attr => assert.equal(attr, expected));
  assert.end();
});
