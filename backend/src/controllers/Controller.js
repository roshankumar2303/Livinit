class Controller {
    constructor(service) {
        this.getAll = this.getAll.bind(this);
        this.find = this.find.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);

        this.service = service;
    }

    async getAll(request, response) {
        const dbResponse = await this.service.getAll();
        return response.status(dbResponse.status).send(dbResponse);
    }

    async find(request, response) {
        const dbResponse = await this.service.find(request.body.query);
        return response.status(dbResponse.status).send(dbResponse);
    }

    async insert(request, response) {
        const dbResponse = await this.service.insert(request.body.query);
        return response.status(dbResponse.status).send(dbResponse);
    }

    async update(request, response) {
        const dbResponse = await this.service.update(request.body.query, request.body.updatedDocument);
        return response.status(dbResponse.status).send(dbResponse);
    }

    async delete(request, response) {
        const dbResponse = await this.service.delete(request.body.query);
        return response.status(dbResponse.status).send(dbResponse);
    }
}

export default Controller;