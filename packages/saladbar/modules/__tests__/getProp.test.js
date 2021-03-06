import Either from 'data.either';
import test from 'tape';
import createElement from '../utils/create/createElement';
import getProp from '../get-prop';

test('getProp returns value of property on single element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = document.querySelector('.default');
  const actual = getProp('innerHTML', testEl);
  const expected = 'Hello!';
  actual
    .leftMap(() => assert.fail('getProp returned an error.'))
    .map(attr => assert.equal(attr, expected));
  assert.end();
});

test('getProp returns error if property not found on single element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = document.querySelector('.default');
  const actual = getProp('not-real', testEl);
  const expected = true;
  actual
    .leftMap(err => assert.equal(err.hasOwnProperty('error'), expected))
    .map(() => assert.fail('getProp did not return an error.'));
  assert.end();
});

test('getProp returns value of property on either element', assert => {
  const document = createElement(1, { classes: 'default' });
  const eitherEl = Either.of(document.querySelector('.default'));
  const actual = getProp('innerHTML', eitherEl);
  const expected = 'Hello!';
  actual
    .leftMap(() => assert.fail('getProp returned an error.'))
    .map(attr => assert.equal(attr, expected));
  assert.end();
});

test('getProp returns error if property not found on either element', assert => {
  const document = createElement(1, { classes: 'default' });
  const eitherEl = Either.of(document.querySelector('.default'));
  const actual = getProp('not-real', eitherEl);
  const expected = true;
  actual
    .leftMap(err => assert.equal(err.hasOwnProperty('error'), expected))
    .map(() => assert.fail('getProp did not return an error.'));
  assert.end();
});
