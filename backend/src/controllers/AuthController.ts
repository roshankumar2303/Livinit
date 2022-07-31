import Controller from "./Controller";
import AuthService from "../services/AuthService";

class AuthController extends Controller {
    constructor() {
        // Assign 'AuthService' to the 'service' property of the base class "Controller"
        super(AuthService);
    }

    // Any other controller methods specific to the 'AuthController' can be added below...
}

export default new AuthController();
