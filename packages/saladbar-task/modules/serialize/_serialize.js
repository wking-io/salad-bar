import Task from 'data.task';
import { serialize } from 'saladbar-core';

// _serialize :: Form Element -> Future e {Input Name: Input Value}
const _serialize = form => {
  const result = serialize(form);

  return result
    ? Task.of(result)
    : Task.rejected({
        error: `Element supplied is not a valid DOM Form Element.`,
      });
};

export default _serialize;
