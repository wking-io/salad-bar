import { of } from 'fluture';
import test from 'tape';
import createElement from '../utils/create/createElement';
import hasData from '../has-data';

test('hasData returns true when data attribute exists on an element', assert => {
  const document = createElement(1, {
    attrs: ['data-test="true"'],
    classes: 'default',
  });
  const testEl = document.querySelector('.default');
  const result = hasData('test', testEl);
  const expected = true;
  result.value(bool => assert.equal(bool, expected));
  assert.end();
});

test('hasData returns false when data attribute does not exists on an element', assert => {
  const document = createElement(1, {
    attrs: ['data-test="true"'],
    classes: 'default',
  });
  const testEl = document.querySelector('.default');
  const result = hasData('not-real', testEl);
  const expected = false;
  result.value(bool => assert.equal(bool, expected));
  assert.end();
});

test('hasData returns true when data attribute exists on a future element', assert => {
  const document = createElement(1, {
    attrs: ['data-test="true"'],
    classes: 'default',
  });
  const testEl = of(document.querySelector('.default'));
  const result = hasData('test', testEl);
  const expected = true;
  result.value(bool => assert.equal(bool, expected));
  assert.end();
});

test('hasData returns false when data attribute does not exists on a future element', assert => {
  const document = createElement(1, {
    attrs: ['data-test="true"'],
    classes: 'default',
  });
  const testEl = of(document.querySelector('.default'));
  const result = hasData('not-real', testEl);
  const expected = false;
  result.value(bool => assert.equal(bool, expected));
  assert.end();
});
