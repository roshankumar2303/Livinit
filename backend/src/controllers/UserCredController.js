import Controller from "./Controller";
import UserCredService from "../services/UserCredService";
import UserCredModel from "../models/UserCredModel";

const model = new UserCredModel().getModel();
const service = new UserCredService(model);

class UserCredController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new UserCredController(service);