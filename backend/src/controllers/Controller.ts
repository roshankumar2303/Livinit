import { Request, Response } from "express";

import Service from "../services/Service";

class Controller {
    static ERR_PAYLOAD = {
        status: 500,
        data: null,
        message: {
            type: "ERROR",
            body: "Possible error(s) in accessing/utilizing Mongoose Services",
        },
    };

    protected service: Service;

    constructor(service: Service) {
        this.service = service;

        this.get = this.get.bind(this);
        this.getAll = this.getAll.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    public async get(request: Request, response: Response) {
        try {
            const dbPayload = await this.service.findOne(request.body.query);
            return response.status(dbPayload.status).send(dbPayload);
        } catch (error) {
            console.error(error);
            return response
                .status(Controller.ERR_PAYLOAD.status)
                .send(Controller.ERR_PAYLOAD);
        }
    }

    public async getAll(request: Request, response: Response) {
        try {
            const dbPayload = await this.service.findAll();
            return response.status(dbPayload.status).send(dbPayload);
        } catch (error) {
            console.error(error);
            return response
                .status(Controller.ERR_PAYLOAD.status)
                .send(Controller.ERR_PAYLOAD);
        }
    }

    public async insert(request: Request, response: Response) {
        try {
            const dbPayload = await this.service.createOne(request.body.query);
            return response.status(dbPayload.status).send(dbPayload);
        } catch (error) {
            console.error(error);
            return response
                .status(Controller.ERR_PAYLOAD.status)
                .send(Controller.ERR_PAYLOAD);
        }
    }

    public async update(request: Request, response: Response) {
        try {
            const dbPayload = await this.service.updateOne(
                request.body.query,
                request.body.updatedData
            );
            return response.status(dbPayload.status).send(dbPayload);
        } catch (error) {
            console.error(error);
            return response
                .status(Controller.ERR_PAYLOAD.status)
                .send(Controller.ERR_PAYLOAD);
        }
    }

    public async delete(request: Request, response: Response) {
        try {
            const dbPayload = await this.service.deleteOne(request.body.query);
            return response.status(dbPayload.status).send(dbPayload);
        } catch (error) {
            console.error(error);
            return response
                .status(Controller.ERR_PAYLOAD.status)
                .send(Controller.ERR_PAYLOAD);
        }
    }
}

export default Controller;
