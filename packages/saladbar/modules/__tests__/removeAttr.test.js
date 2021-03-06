import { compose } from 'ramda';
import Either from 'data.either';
import test from 'tape';
import createElement from '../utils/create/createElement';
import hasAttr from '../has-attr';
import removeAttr from '../remove-attr';

test('removeAttr removes attribute on single element', assert => {
  const document = createElement(1, {
    attrs: ['aria-expanded="false"'],
    classes: 'default',
  });
  const testEl = document.querySelector('.default');
  const actual = compose(hasAttr('aria-expanded'), removeAttr('aria-expanded'));
  const expected = false;
  actual(testEl)
    .leftMap(() => assert.fail('removeAttr returned an error.'))
    .map(attr => assert.equal(attr, expected));
  assert.end();
});

test('removeAttr does not return error if attribute not found on single element', assert => {
  const document = createElement(2, {
    attrs: ['aria-expanded="false"'],
    classes: 'default',
  });
  const testEl = document.querySelector('.default');
  const actual = compose(hasAttr('not-real'), removeAttr('not-real'));
  const expected = false;
  actual(testEl)
    .leftMap(() => assert.fail('removeAttr returned an error.'))
    .map(attr => assert.equal(attr, expected));
  assert.end();
});

test('removeAttr removes attribute on either element', assert => {
  const document = createElement(1, {
    attrs: ['aria-expanded="false"'],
    classes: 'default',
  });
  const eitherEl = Either.of(document.querySelector('.default'));
  const actual = compose(hasAttr('aria-expanded'), removeAttr('aria-expanded'));
  const expected = false;
  actual(eitherEl)
    .leftMap(() => assert.fail('removeAttr returned an error.'))
    .map(attr => assert.equal(attr, expected));
  assert.end();
});

test('removeAttr does not return error if attribute not found on either element', assert => {
  const document = createElement(1, {
    attrs: ['aria-expanded="false"'],
    classes: 'default',
  });
  const eitherEl = Either.of(document.querySelector('.default'));
  const actual = compose(hasAttr('not-real'), removeAttr('not-real'));
  const expected = false;
  actual(eitherEl)
    .leftMap(() => assert.fail('removeAttr returned an error.'))
    .map(attr => assert.equal(attr, expected));
  assert.end();
});
