import Service from "./Service";
import AuthModel from "../models/AuthModel";

class AuthService extends Service {
    constructor() {
        // Assign 'AuthModel' to the 'model' property of the base class "Service"
        super(AuthModel.getModel());
    }

    // Any other service methods specific to the 'AuthService' can be added below...
}

export default new AuthService();
