import { Request, Response } from "express";

import Service from "../services/Service";

class Controller {
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
            const dbResponse = await this.service.findOne(request.body.query);
            return response.status(dbResponse.status).send(dbResponse);
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(request: Request, response: Response) {
        try {
            const dbResponse = await this.service.findAll();
            return response.status(dbResponse.status).send(dbResponse);
        } catch (error) {
            console.log(error);
        }
    }

    public async insert(request: Request, response: Response) {
        try {
            const dbResponse = await this.service.createOne(request.body.query);
            return response.status(dbResponse.status).send(dbResponse);
        } catch (error) {
            console.log(error);
        }
    }

    public async update(request: Request, response: Response) {
        try {
            const dbResponse = await this.service.updateOne(
                request.body.query,
                request.body.updatedData
            );
            return response.status(dbResponse.status).send(dbResponse);
        } catch (error) {
            console.log(error);
        }
    }

    public async delete(request: Request, response: Response) {
        try {
            const dbResponse = await this.service.deleteOne(request.body.query);
            return response.status(dbResponse.status).send(dbResponse);
        } catch (error) {
            console.log(error);
        }
    }
}

export default Controller;
