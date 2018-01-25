import { chain, curry } from 'ramda';
import _branch from './_branch';
import { isFuture } from 'fluture';

const branch = curry((fn, el) => {
  if (isFuture(el)) {
    return chain(_branch(fn))(el);
  }
  let result = el;
  _branch(fn)(el).fork(err => (result = err), val => (result = val));
  return result;
});

export default branch;
