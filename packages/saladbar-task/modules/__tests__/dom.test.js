import test from 'tape';
import createElement from '../utils/create/createElement';
import isElmNode from '../utils/is-elm-node';
import Task from 'data.task';
import dom from '../dom';

test('dom returns a task that resolves to an element when element exists.', assert => {
  const document = createElement(1, { classes: 'default' });
  const root = document.querySelector('.wrapper');
  const actual = dom('.default', root);
  const expected = true;
  actual.fork(
    err => assert.fail(err),
    el => assert.equal(isElmNode(el), expected)
  );
  assert.end();
});

test('dom returns a task that resolves to an error when element does not exists.', assert => {
  const document = createElement(1, { classes: 'default' });
  const root = document.querySelector('.wrapper');
  const actual = dom('.not-real', root);
  const expected = true;
  actual.fork(
    err => assert.equal(err.hasOwnProperty('error'), expected),
    () => assert.fail(`Element that did not exist returned a resolved task`)
  );
  assert.end();
});

test('dom returns a task that resolves to an element when element exists and root is Future.', assert => {
  const document = createElement(1, { classes: 'default' });
  const root = Task.of(document.querySelector('.wrapper'));
  const actual = dom('.default', root);
  const expected = true;
  actual.fork(
    err => assert.fail(err),
    el => assert.equal(isElmNode(el), expected)
  );
  assert.end();
});

test('dom returns a task that resolves to an error when element does not exist and root is Future.', assert => {
  const document = createElement(1, { classes: 'default' });
  const root = Task.of(document.querySelector('.wrapper'));
  const actual = dom('.not-real', root);
  const expected = true;
  actual.fork(
    err => assert.equal(err.hasOwnProperty('error'), expected),
    () => assert.fail(`Element that did not exist returned a resolved task`)
  );
  assert.end();
});
