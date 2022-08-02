import Service from "./Service";
import UserModel from "../models/UserModel";

class UserService extends Service {
    constructor() {
        // Assign 'UserModel' to the 'model' property of the base class "Service"
        super(UserModel.getModel());
    }

    // Any other service methods specific to the 'UserService' can be added below...
}

export default new UserService();
