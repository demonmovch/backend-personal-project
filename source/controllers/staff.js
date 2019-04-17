import { Staff as StaffModel } from '../models';

export class Staff {
    constructor(data) {
        this.models = {
            staff: new StaffModel(data),
        };
    }

    async register() {
        const data = await this.models.staff.register();

        return data;
    }

    async login() {
        const data = await this.models.staff.login();

        return data;
    }
}
