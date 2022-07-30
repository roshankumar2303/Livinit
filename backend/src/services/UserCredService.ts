import Service from "./Service";
import UserCredModel from "../models/UserCredModel";

class UserCredService extends Service {
    constructor() {
        // Assign 'UserCredModel' to the 'model' property of the base class "Service"
        super(UserCredModel.getModel());
    }

    // Any other service methods specific to the 'UserCredService' can be added below...
}

export default new UserCredService();
