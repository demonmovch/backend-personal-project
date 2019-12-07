export const createProduct = {
  type: 'object',
  properties: {
    uid: {
      type: 'string',
    },
    pid: {
      type: 'string',
    },
    count: {
      type: 'number',
    },
    comment: {
      type: 'string',
    },
  },
  required: ['uid', 'pid', 'count', 'comment'],
  additionalProperties: false,
};
