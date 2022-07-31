import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

import jwt from "jsonwebtoken";

dotenv.config();

class AuthMW {
    constructor() {
        this.authenticateToken = this.authenticateToken.bind(this);
    }

    public authenticateToken(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const authHeader = request.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if (token == null)
            return response.status(401).send({
                status: 401,
                data: null,
                message: {
                    type: "ERROR",
                    body: "Unauthorized",
                },
            });

        jwt.verify(
            token,
            process.env.AUTH_SECRET_TOKEN as string,
            (error: any, decodedPayload: any) => {
                if (error) {
                    console.error(error);
                    return response.status(403).send({
                        status: 403,
                        data: null,
                        message: {
                            type: "ERROR",
                            body: "Forbidden",
                        },
                    });
                }

                request.body.auth = decodedPayload;
                next();
            }
        );
    }
}

export default new AuthMW();
