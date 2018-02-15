import { curry } from 'ramda';
import { of, reject } from 'fluture';
import { isStyle } from 'saladbar-core';

// _isStyle :: String -> String -> DOM Element -> Future Error Bool
const _isStyle = (prop, val, dom) => {
  const result = isStyle(prop, val, dom);

  return result
    ? of(result)
    : reject({
        error: `There is not a style property with the following name on this element: ${prop}`,
      });
};

export default curry(_isStyle);