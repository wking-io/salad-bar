import { curry } from 'ramda';
import { of } from 'fluture';
import { hasProp } from 'saladbar-core';

// _hasProp :: String -> DOM Element -> Future Error Bool
const _hasProp = (prop, dom) => of(hasProp(prop, dom));

export default curry(_hasProp);