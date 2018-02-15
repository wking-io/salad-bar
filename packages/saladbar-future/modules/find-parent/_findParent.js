import { curry } from 'ramda';
import { of } from 'fluture';
import { findParent } from 'saladbar-core';

// _findParent :: DOM -> (DOM Element -> Bool) -> DOM Element -> Future Error DOM Element
const _findParent = (global, pred, dom) => of(findParent(global, pred, dom));

export default curry(_findParent);