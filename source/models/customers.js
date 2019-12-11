// Instruments
import { customers } from '../odm';
import { NotFoundError } from '../helpers/errors';

export class Customers {
  constructor(data) {
    this.data = data;
  }

  async create() {
    const [fName, lName] = this.data.name.split(' ');

    const customersSchema = {
      name: {
        first: fName,
        last: lName,
      },
      emails: [{ email: this.data.email, primary: true }],
      phones: [{ phone: this.data.phone, primary: true }],
      city: this.data.city,
      country: this.data.country,
      password: this.data.password,
    };

    const data = await customers.create(customersSchema);

    return data;
  }

  async getAll() {
    const data = await customers
      .find({})
      .sort('-created')
      .lean();

    return data;
  }

  async getByHash() {
    const { hash } = this.data;

    const data = await customers.findOne({ hash }).lean();

    if (!data) {
      throw new NotFoundError(`can not find document with hash ${hash}`);
    }

    return data;
  }

  async updateByHash() {
    const { hash, payload } = this.data;

    const data = await customers.findOneAndUpdate({ hash }, payload);

    if (!data) {
      throw new NotFoundError(`can not find document with hash ${hash}`);
    }

    return data;
  }

  async removeByHash() {
    const { hash } = this.data;

    const data = await customers.findOneAndDelete({ hash });

    if (!data) {
      throw new NotFoundError(`can not find document with hash ${hash}`);
    }

    return data;
  }
}
