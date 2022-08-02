import { Request, Response, NextFunction } from "express";

class UserMiddleware {
    static authorizeUserDataAccess(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        // This Middleware has to be called after 'AuthMiddleware.verifyToken'
        if (request.body.auth.username === request.body.query.username) {
            next();
        } else {
            console.error(
                `Error: User '${request.body.auth.username}' cannot access details of User '${request.body.query.username}'`
            );
            return response.status(403).send({
                status: 403,
                data: null,
                message: {
                    type: "ERROR",
                    body: "Forbidden",
                },
            });
        }
    }
}

export default UserMiddleware;
