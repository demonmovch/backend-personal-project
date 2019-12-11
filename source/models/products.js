// Instruments
import { products } from '../odm';
import { NotFoundError } from '../helpers/errors';

export class Products {
  constructor(data) {
    this.data = data;
  }

  async create() {
    const data = await products.create(this.data);

    return data;
  }

  async getAll() {
    const data = await products
      .find({})
      .sort('-created')
      .lean();

    return data;
  }

  async getByHash() {
    const { hash } = this.data;

    const data = await products.findOne({ hash }).lean();

    if (!data) {
      throw new NotFoundError(`can not find document with hash ${hash}`);
    }

    return data;
  }

  async updateByHash() {
    const { hash, payload } = this.data;

    const data = await products.findOneAndUpdate({ hash }, payload);

    if (!data) {
      throw new NotFoundError(`can not find document with hash ${hash}`);
    }

    return data;
  }

  async removeByHash() {
    const { hash } = this.data;

    const data = await products.findOneAndDelete({ hash });

    if (!data) {
      throw new NotFoundError(`can not find document with hash ${hash}`);
    }

    return data;
  }
}
