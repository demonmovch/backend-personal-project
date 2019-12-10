// Core
import bcrypt from "bcryptjs";

// Instruments
import { staff } from "../odm";
import { NotFoundError } from "../helpers/errors";

export class Staff {
  constructor(data) {
    this.data = data;
  }

  async create() {
    const [fName, lName] = this.data.name.split(" ");

    const data = await staff.create(this.data);

    return data;
  }

  /*async getAll() {
    const { page: oPage, size: oSize } = this.data;

    const { page, size } = validatePaginationObj({
      page: oPage,
      size: oSize,
    });
    const total = await staff.countDocuments();
    const offset = (page - 1) * size;

    const data = await staff
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
  }*/
}
