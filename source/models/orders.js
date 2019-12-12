// Instruments
import { orders, products, customers } from "../odm";
import { NotFoundError } from "../helpers/errors";

export class Orders {
  constructor(data) {
    this.data = data;
  }

  async create() {
    const { uid, pid, count } = this.data;

    const customer = await customers.findOne({ hash: uid });

    if (!customer) {
      throw new NotFoundError(`can not find customer with hash ${uid}`);
    }

    const product = await products.findOne({ hash: pid });

    if (!product) {
      throw new NotFoundError(`can not find product with hash ${pid}`);
    }

    if (product.total < count) {
      throw new Error(
        "we do not have such number of this product in the store"
      );
    }

    const data = await orders.create(this.data);

    await products.findOneAndUpdate(
      { hash: pid },
      { total: product.total - count },
      {
        new: true,
        upsert: true
      }
    );

    return data;
  }

  async getAll() {
    const data = await orders
      .find({})
      .sort("-created")
      .lean();

    return data;
  }

  async getByHash() {
    const { hash } = this.data;

    const data = await orders.findOne({ hash }).lean();

    if (!data) {
      throw new NotFoundError(`can not find order with hash ${hash}`);
    }

    return data;
  }

  async updateByHash() {
    const { hash, count } = this.data;

    const order = await orders.findOne({ hash }).lean();

    if (!order) {
      throw new NotFoundError(`can not find order with hash ${hash}`);
    }

    const product = await products.findOneAndUpdate(
      { hash: order.pid },
      { $inc: { total: order.count } },
      {
        new: true,
        upsert: true
      }
    );

    if (product.total < count) {
      throw new Error(
        "we do not have such number of this product in the store"
      );
    }

    await products.findOneAndUpdate(
      { hash: order.pid },
      { $inc: { total: -count } },
      {
        new: true,
        upsert: true
      }
    );

    const data = await orders.findOneAndUpdate(
      { hash: hash },
      { count: count },
      {
        new: true,
        upsert: true
      }
    );

    if (!data) {
      throw new NotFoundError(`can not find document with hash ${hash}`);
    }

    return data;
  }

  async removeByHash() {
    const { hash } = this.data;

    const order = await orders.findOne({ hash: hash }).lean();

    if (!order) {
      throw new NotFoundError(`can not find order with hash ${hash}`);
    }

    await products.findOneAndUpdate(
      { hash: order.pid },
      { $inc: { total: order.count } },
      {
        new: true,
        upsert: true
      }
    );

    const data = await orders.findOneAndDelete({ hash });

    if (!data) {
      throw new NotFoundError(`can not find document with hash ${hash}`);
    }

    return data;
  }
}
