import { Model } from "mongoose";

import Service from "./Service";

class UserCredService extends Service {
    constructor(model: Model<any>) {
        super(model);
    }
}

export default UserCredService;
