import Service from "../services/Service";

class Controller {
    protected service: Service;

    constructor(service: Service) {
        this.service = service;

        this.getAll = this.getAll.bind(this);
        this.find = this.find.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    public async getAll(request: any, response: any) {
        const dbResponse = await this.service.getAll();
        return response.status(dbResponse.status).send(dbResponse);
    }

    public async find(request: any, response: any) {
        const dbResponse = await this.service.find(request.body.query);
        return response.status(dbResponse.status).send(dbResponse);
    }

    public async insert(request: any, response: any) {
        const dbResponse = await this.service.insert(request.body.query);
        return response.status(dbResponse.status).send(dbResponse);
    }

    public async update(request: any, response: any) {
        const dbResponse = await this.service.update(
            request.body.query,
            request.body.updatedDocument
        );
        return response.status(dbResponse.status).send(dbResponse);
    }

    public async delete(request: any, response: any) {
        const dbResponse = await this.service.delete(request.body.query);
        return response.status(dbResponse.status).send(dbResponse);
    }
}

export default Controller;
