export const createCustomer = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
    },
    email: {
      type: 'string',
      format: 'email',
    },
    phone: {
      type: 'string',
    },
    city: {
      type: 'string',
    },
    country: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
  required: ['name', 'email', 'phone', 'city', 'country', 'password'],
  additionalProperties: false,
};
