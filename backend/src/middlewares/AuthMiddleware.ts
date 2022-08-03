import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

class AuthMiddleware {
    static checkAuthorization(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const token = request.cookies.token;
        const username = request.cookies.username;

        // Check if both cookies are intact...
        if (token === undefined || username === undefined) {
            token !== undefined && response.clearCookie("token");
            username !== undefined && response.clearCookie("username");

            return response.status(401).send({
                status: 401,
                data: null,
                message: {
                    type: "ERROR",
                    body: "Unauthorized",
                },
            });
        }

        // Verify JWT token and Cross-check if token payload matches 'username' cookie
        jwt.verify(
            token,
            process.env.AUTH_SECRET_TOKEN as string,
            (error: any, decodedPayload: any) => {
                if (decodedPayload.username !== username || error) {
                    response.clearCookie("token");
                    response.clearCookie("username");

                    return response.status(403).send({
                        status: 403,
                        data: null,
                        message: {
                            type: "ERROR",
                            body: "Forbidden",
                        },
                    });
                }
                next();
            }
        );
    }
}

export default AuthMiddleware;
