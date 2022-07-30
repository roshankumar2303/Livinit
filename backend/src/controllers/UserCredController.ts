import Controller from "./Controller";

import UserCredService from "../services/UserCredService";
import UserCredModel from "../models/UserCredModel";

class UserCredController extends Controller {
    constructor(service: UserCredService) {
        super(service);
    }
}

const controllerInstance = new UserCredController(
    new UserCredService(new UserCredModel().getModel())
);
export default controllerInstance;
