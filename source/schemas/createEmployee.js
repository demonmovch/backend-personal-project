export const createEmployee = {
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
    role: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
  required: ['name', 'email', 'phone', 'role', 'password'],
  additionalProperties: false,
};
