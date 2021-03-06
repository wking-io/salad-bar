import Task from 'data.task';
import test from 'tape';
import createElement from '../utils/create/createElement';
import isProp from '../is-prop';

test('isProp returns true when property exists and the value matches on an element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = document.querySelector('.default');
  const result = isProp('innerHTML', 'Hello!', testEl);
  const expected = true;
  result.fork(
    err => assert.fail(err),
    actual => assert.equal(actual, expected)
  );
  assert.end();
});

test('isProp returns true when property exists and the value matches on a task element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = Task.of(document.querySelector('.default'));
  const result = isProp('innerHTML', 'Hello!', testEl);
  const expected = true;
  result.fork(
    err => assert.fail(err),
    actual => assert.equal(actual, expected)
  );
  assert.end();
});

test('isProp returns false when property exists but the value does not match on an element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = document.querySelector('.default');
  const result = isProp('innerHTML', 'test', testEl);
  const expected = false;
  result.fork(
    err => assert.fail(err),
    actual => assert.equal(actual, expected)
  );
  assert.end();
});

test('isProp returns false when property exists but the value does not match on a task element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = Task.of(document.querySelector('.default'));
  const result = isProp('innerHTML', 'test', testEl);
  const expected = false;
  result.fork(
    err => assert.fail(err),
    actual => assert.equal(actual, expected)
  );
  assert.end();
});

test('isProp returns error when property does not exist on an element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = document.querySelector('.default');
  const result = isProp('not-real', 'test', testEl);
  const expected = true;
  result.fork(
    actual => assert.equal(actual.hasOwnProperty('error'), expected),
    err => assert.fail(err)
  );
  assert.end();
});

test('isProp returns error when property does not exist on a task element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = Task.of(document.querySelector('.default'));
  const result = isProp('not-real', 'test', testEl);
  const expected = true;
  result.fork(
    actual => assert.equal(actual.hasOwnProperty('error'), expected),
    err => assert.fail(err)
  );
  assert.end();
});
