import Task from 'data.task';
import test from 'tape';
import createElement from '../utils/create/createElement';
import getClasses from '../get-classes';

test('getClasses returns object of classes with all classes that exist on element', assert => {
  const document = createElement(1, { classes: 'default also-this' });
  const testEl = document.querySelector('.default');
  const result = getClasses(testEl);
  const expected = 2;
  result.fork(
    () => assert.fail(),
    actual => assert.equal(actual.length, expected)
  );
  assert.end();
});

test('getClasses returns error if no classes found on element', assert => {
  const document = createElement(1, { classes: '', id: 'default' });
  const testEl = document.querySelector('#default');
  const result = getClasses(testEl);
  const expected = true;
  result.fork(
    err => assert.equal(err.hasOwnProperty('error'), expected),
    () =>
      assert.fail('getClasses did not return errror when there are no classes.')
  );
  assert.end();
});

test('getClasses returns object of classes with all classes that exist on a task element', assert => {
  const document = createElement(1, { classes: 'default also-this' });
  const taskEl = Task.of(document.querySelector('.default'));
  const result = getClasses(taskEl);
  const expected = 2;
  result.fork(
    () => assert.fail(),
    actual => assert.equal(actual.length, expected)
  );
  assert.end();
});

test('getClasses returns error no classes found on a task element', assert => {
  const document = createElement(1, { classes: '', id: 'default' });
  const taskEl = Task.of(document.querySelector('#default'));
  const result = getClasses(taskEl);
  const expected = true;
  result.fork(
    err => assert.equal(err.hasOwnProperty('error'), expected),
    () =>
      assert.fail('getClasses did not return errror when there are no classes.')
  );
  assert.end();
});
