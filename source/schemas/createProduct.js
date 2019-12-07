export const createProduct = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    price: {
      type: 'number',
    },
    discount: {
      type: 'number',
    },
    total: {
      type: 'number',
    },
  },
  required: ['title', 'description', 'price', 'discount', 'total'],
  additionalProperties: false,
};
