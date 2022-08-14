import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import Controller from "./Controller";
import AuthService from "../services/AuthService";

class AuthController extends Controller {
    constructor() {
        // Assign 'AuthService' to the 'service' property of the base class "Controller"
        super(AuthService);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.signup = this.signup.bind(this);
    }

    // --------------------------------------------------
    // Any other controller methods specific to
    // the 'AuthController' can be added below...
    // --------------------------------------------------

    public async login(request: Request, response: Response) {
        try {
            const query = request.body.query;
            if (query.username === undefined || query.password === undefined) {
                throw "Error: Username (or) Password missing";
            }

            const dbPayload = await this.service.findOne(query);
            if (dbPayload.status === 200) {
                const token = jwt.sign(
                    {
                        username: dbPayload.data.username as string,
                        timestamp: new Date().toISOString(),
                    },
                    process.env.AUTH_SECRET_TOKEN as string,
                    { expiresIn: "3600s" }
                );
                response.cookie("token", token, { httpOnly: true });
                response.cookie("username", dbPayload.data.username);
            }

            return response.status(dbPayload.status).send({
                data: null,
                status: dbPayload.status,
                message:
                    dbPayload.status === 200
                        ? "Login Successful"
                        : dbPayload.message,
            });
        } catch (error) {
            console.error(error);
            return response
                .status(Controller.ERR_PAYLOAD.status)
                .send(Controller.ERR_PAYLOAD);
        }
    }

    public validate(request: Request, response: Response) {
        return response.status(200).send({
            data: { isValidSession: true },
            status: 200,
            message: {
                type: "OK",
                body: "Validation successful",
            },
        });
    }

    public logout(request: Request, response: Response) {
        response.clearCookie("token");
        response.clearCookie("username");

        return response.status(200).send({
            data: null,
            status: 200,
            message: {
                type: "OK",
                body: "Logout successful",
            },
        });
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
