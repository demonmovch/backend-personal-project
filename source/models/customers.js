// Instruments
import { customers } from '../odm';
import { NotFoundError } from '../helpers/errors';

export class Customers {
  constructor(data) {
    this.data = data;
  }

  async create() {
    const data = await customers.create(this.data);

    return data;
  }

  /* async getAll() {
        const { page: oPage, size: oSize } = this.data;

        const { page, size } = validatePaginationObj({
            page: oPage,
            size: oSize,
        });
        const total = await customers.countDocuments();
        const offset = (page - 1) * size;

        const data = await customers
            .find({})
            .sort('-created')
            .skip(offset)
            .limit(size)
            .select('-__v -id')
            .lean();

        return {
            data,
            meta: {
                total,
                page,
                size,
            },
        };
    }

    async getByHash() {
        const { hash } = this.data;

        const data = await customers
            .findOne({ hash })
            .select('-__v -id')
            .lean();

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
    }*/
}
