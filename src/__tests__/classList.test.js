/* eslint no-magic-numbers: 0 */

import { of } from 'fluture';
import test from 'tape';
import classList from '../class-list';
import createElement from '../utils/element';

test('classList adds single class to an element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = document.querySelector('.default');
  const actual = classList('add', 'new-class', testEl);
  const expected = ['default', 'new-class'];
  assert.deepEqual(Object.values(actual.classList).sort(), expected.sort());
  assert.end();
});

test('classList adds multiple classes to an element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = document.querySelector('.default');
  const actual = classList('add', ['new-class', 'also-new'], testEl);
  const expected = ['default', 'new-class', 'also-new'];
  assert.deepEqual(Object.values(actual.classList).sort(), expected.sort());
  assert.end();
});

test('classList adds single class to multiple elements', assert => {
  const document = createElement(2, { classes: 'default' });
  const testEls = Array.from(document.querySelectorAll('.default'));
  const actual = classList('add', ['new-class'], testEls);
  const expected = ['default', 'new-class'];
  actual.forEach(el => {
    assert.deepEqual(Object.values(el.classList).sort(), expected.sort());
  });
  assert.end();
});

test('classList adds multiple classes to multiple elements', assert => {
  const document = createElement(2, { classes: 'default' });
  const testEls = Array.from(document.querySelectorAll('.default'));
  const actual = classList('add', ['new-class', 'also-new'], testEls);
  const expected = ['default', 'new-class', 'also-new'];
  actual.forEach(el => {
    assert.deepEqual(Object.values(el.classList).sort(), expected.sort());
  });
  assert.end();
});

test('classList adds single class to a future element', assert => {
  const document = createElement(1, { classes: 'default' });
  const futureEl = of(document.querySelector('.default'));
  const actual = classList('add', 'new-class', futureEl);
  const expected = ['default', 'new-class'];
  actual.value(el =>
    assert.deepEqual(Object.values(el.classList).sort(), expected.sort())
  );
  assert.end();
});

test('classList adds multiple classes to a future element', assert => {
  const document = createElement(1, { classes: 'default' });
  const futureEl = of(document.querySelector('.default'));
  const actual = classList('add', ['new-class', 'also-new'], futureEl);
  const expected = ['default', 'new-class', 'also-new'];
  actual.value(el =>
    assert.deepEqual(Object.values(el.classList).sort(), expected.sort())
  );
  assert.end();
});

test('classList adds single class to multiple future elements', assert => {
  const document = createElement(2, { classes: 'default' });
  const futureEls = of(Array.from(document.querySelectorAll('.default')));
  const actual = classList('add', ['new-class'], futureEls);
  const expected = ['default', 'new-class'];
  actual.value(testEls =>
    testEls.forEach(el => {
      assert.deepEqual(Object.values(el.classList).sort(), expected.sort());
    })
  );
  assert.end();
});

test('classList adds multiple classes to multiple future elements', assert => {
  const document = createElement(2, { classes: 'default' });
  const futureEls = of(Array.from(document.querySelectorAll('.default')));
  const actual = classList('add', ['new-class', 'also-new'], futureEls);
  const expected = ['default', 'new-class', 'also-new'];
  actual.value(testEls =>
    testEls.forEach(el => {
      assert.deepEqual(Object.values(el.classList).sort(), expected.sort());
    })
  );
  assert.end();
});

test('classList removes single class from an element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = document.querySelector('.default');
  const actual = classList('remove', 'remove-this', testEl);
  const expected = ['default'];
  assert.deepEqual(Object.values(actual.classList).sort(), expected.sort());
  assert.end();
});

test('classList removes multiple classes from an element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = document.querySelector('.default');
  const actual = classList('remove', ['remove-class', 'also-remove'], testEl);
  const expected = ['default'];
  assert.deepEqual(Object.values(actual.classList).sort(), expected.sort());
  assert.end();
});

test('classList removes single class from multiple elements', assert => {
  const document = createElement(2, { classes: 'default' });
  const testEls = Array.from(document.querySelectorAll('.default'));
  const actual = classList('remove', ['remove-class'], testEls);
  const expected = ['default'];
  actual.forEach(el => {
    assert.deepEqual(Object.values(el.classList).sort(), expected.sort());
  });
  assert.end();
});

test('classList removes multiple classes from multiple elements', assert => {
  const document = createElement(2, { classes: 'default' });
  const testEls = Array.from(document.querySelectorAll('.default'));
  const actual = classList('remove', ['remove-class', 'also-remove'], testEls);
  const expected = ['default'];
  actual.forEach(el => {
    assert.deepEqual(Object.values(el.classList).sort(), expected.sort());
  });
  assert.end();
});

test('classList removes single class from a future element', assert => {
  const document = createElement(1, { classes: 'default' });
  const futureEl = of(document.querySelector('.default'));
  const actual = classList('remove', 'remove-class', futureEl);
  const expected = ['default'];
  actual.value(el =>
    assert.deepEqual(Object.values(el.classList).sort(), expected.sort())
  );
  assert.end();
});

test('classList removes multiple classes from a future element', assert => {
  const document = createElement(1, { classes: 'default' });
  const futureEl = of(document.querySelector('.default'));
  const actual = classList('remove', ['remove-class', 'also-remove'], futureEl);
  const expected = ['default'];
  actual.value(el =>
    assert.deepEqual(Object.values(el.classList).sort(), expected.sort())
  );
  assert.end();
});

test('classList removes single class from multiple future elements', assert => {
  const document = createElement(2, { classes: 'default' });
  const futureEls = of(Array.from(document.querySelectorAll('.default')));
  const actual = classList('remove', ['remove-class'], futureEls);
  const expected = ['default'];
  actual.value(testEls =>
    testEls.forEach(el => {
      assert.deepEqual(Object.values(el.classList).sort(), expected.sort());
    })
  );
  assert.end();
});

test('classList removes multiple classes from multiple future elements', assert => {
  const document = createElement(2, { classes: 'default' });
  const futureEls = of(Array.from(document.querySelectorAll('.default')));
  const actual = classList(
    'remove',
    ['remove-class', 'also-remove'],
    futureEls
  );
  const expected = ['default'];
  actual.value(testEls =>
    testEls.forEach(el => {
      assert.deepEqual(Object.values(el.classList).sort(), expected.sort());
    })
  );
  assert.end();
});

test('classList toggles single class from an element', assert => {
  const document = createElement(1, { classes: 'default' });
  const testEl = document.querySelector('.default');
  const actualOne = classList('toggle', 'toggle-this', testEl);
  const expectedOne = ['default', 'toggle-this'];
  assert.deepEqual(
    Object.values(actualOne.classList).sort(),
    expectedOne.sort()
  );
  const actualTwo = classList('toggle', 'toggle-this', testEl);
  const expectedTwo = ['default'];
  assert.deepEqual(
    Object.values(actualTwo.classList).sort(),
    expectedTwo.sort()
  );
  assert.end();
});

test('classList toggles single class from multiple elements', assert => {
  const document = createElement(2, { classes: 'default' });
  const testEls = Array.from(document.querySelectorAll('.default'));
  const actualOne = classList('toggle', 'toggle-class', testEls);
  const expectedOne = ['default', 'toggle-class'];
  actualOne.forEach(el => {
    assert.deepEqual(Object.values(el.classList).sort(), expectedOne.sort());
  });
  const actualTwo = classList('toggle', 'toggle-class', testEls);
  const expectedTwo = ['default'];
  actualTwo.forEach(el => {
    assert.deepEqual(Object.values(el.classList).sort(), expectedTwo.sort());
  });
  assert.end();
});

test('classList toggles single class from a future element', assert => {
  const document = createElement(1, { classes: 'default' });
  const futureEl = of(document.querySelector('.default'));
  const actualOne = classList('toggle', 'toggle-class', futureEl);
  const expectedOne = ['default', 'toggle-class'];
  actualOne.value(el =>
    assert.deepEqual(Object.values(el.classList).sort(), expectedOne.sort())
  );
  const actualTwo = classList('toggle', 'toggle-class', futureEl);
  const expectedTwo = ['default'];
  actualTwo.value(el =>
    assert.deepEqual(Object.values(el.classList).sort(), expectedTwo.sort())
  );
  assert.end();
});

test('classList toggles single class from multiple future elements', assert => {
  const document = createElement(2, { classes: 'default' });
  const futureEls = of(Array.from(document.querySelectorAll('.default')));
  const actualOne = classList('toggle', 'toggle-class', futureEls);
  const expectedOne = ['default', 'toggle-class'];
  actualOne.value(testEls =>
    testEls.forEach(el => {
      assert.deepEqual(Object.values(el.classList).sort(), expectedOne.sort());
    })
  );
  const actualTwo = classList('toggle', 'toggle-class', futureEls);
  const expectedTwo = ['default'];
  actualTwo.value(testEls =>
    testEls.forEach(el => {
      assert.deepEqual(Object.values(el.classList).sort(), expectedTwo.sort());
    })
  );
  assert.end();
});