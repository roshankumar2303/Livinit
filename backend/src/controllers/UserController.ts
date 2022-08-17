import { NextFunction, Request, Response } from "express";

import Controller from "./Controller";
import UserService from "../services/UserService";

class UserController extends Controller {
    constructor() {
        // Assign 'UserService' to the 'service' property of the base class "Controller"
        super(UserService);
        this.signup = this.signup.bind(this);
    }

    // --------------------------------------------------
    // Any other controller methods specific to
    // the 'UserController' can be added below...
    // --------------------------------------------------

    public async signup(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        // This controller function creates record of new user details (username, firstname, lastname,
        // email and phone), after which, the control is passed to 'login' of AuthController, which
        // in turn logs in the new user
        try {
            const dbPayload = await this.service.createOne({
                username: request.body.query.username,
                firstname: request.body.query.firstname,
                lastname: request.body.query.lastname,
                email: request.body.query.email,
                phone: request.body.query.phone,
            });
            if (dbPayload.status === 500) throw dbPayload;
            next();
        } catch (error) {
            console.error(error);
            return response
                .status(Controller.ERR_PAYLOAD.status)
                .send(Controller.ERR_PAYLOAD);
        }
    }
}

export default new UserController();
