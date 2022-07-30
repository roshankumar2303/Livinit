import Controller from "./Controller";
import UserCredService from "../services/UserCredService";

class UserCredController extends Controller {
    constructor() {
        // Assign 'UserCredService' to the 'service' property of the base class "Controller"
        super(UserCredService);
    }

    // Any other controller methods specific to the 'UserCredController' can be added below...
}

export default new UserCredController();
