import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import Controller from "./Controller";
import AuthService from "../services/AuthService";

class AuthController extends Controller {
    constructor() {
        // Assign 'AuthService' to the 'service' property of the base class "Controller"
        super(AuthService);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }

    // --------------------------------------------------
    // Any other controller methods specific to
    // the 'AuthController' can be added below...
    // --------------------------------------------------

    public async login(request: Request, response: Response) {
        try {
            const dbPayload = await this.service.findOne(request.body.query);
            if (dbPayload.status === 200) {
                const accessToken = jwt.sign(
                    {
                        username: dbPayload.data.username as string,
                        timestamp: new Date().toISOString(),
                    },
                    process.env.AUTH_SECRET_TOKEN as string,
                    { expiresIn: "3600s" }
                );
                response.append("authorization", `bearer ${accessToken}`);
            }
            return response.status(dbPayload.status).send(dbPayload);
        } catch (error) {
            console.error(error);
            return response
                .status(Controller.ERR_PAYLOAD.status)
                .send(Controller.ERR_PAYLOAD);
        }
    }

    public async signup(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        // This controller function creates record of new user authentication credentials,
        // after which, the control is passed to 'signup' of UserController, which
        // in turn creates record of the details of the new user
        try {
            const dbPayload = await this.service.createOne({
                username: request.body.query.username,
                password: request.body.query.password,
            });
            next();
        } catch (error) {
            console.error(error);
            return response
                .status(Controller.ERR_PAYLOAD.status)
                .send(Controller.ERR_PAYLOAD);
        }
    }
}

export default new AuthController();
