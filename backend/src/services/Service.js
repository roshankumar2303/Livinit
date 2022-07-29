class Service {
    constructor(model) {
        this.getAll = this.getAll.bind(this);
        this.find = this.find.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);

        this.model = model;
    }

    getAll() {
        return this.model.find({}).exec()
            .then(
                (documents) => {
                    return {
                        status: 200,
                        message: "[OK] db getAll",
                        data: documents,
                    }
                },
                (error) => {
                    return {
                        status: 500,
                        message: "[ERROR] db getAll",
                        error: error,
                    }
                }
            );
    }

    find(query) {
        return this.model.findOne(query).exec()
            .then(
                (document) => {
                    return {
                        status: 200,
                        message: "[OK] db get",
                        data: document,
                    }
                },
                (error) => {
                    return {
                        status: 500,
                        message: "[ERROR] db get",
                        error: error,
                    }
                }
            );
    }

    insert(query) {
        return this.model.create(query)
            .then(
                (document) => {
                    return {
                        status: 200,
                        message: "[OK] db insert",
                        data: document,
                    }
                },
                (error) => {
                    return {
                        status: 500,
                        message: "[ERROR] db insert",
                        error: error,
                    }
                }
            );
    }

    update(query, updatedDocument) {
        return this.model.findOneAndUpdate(query, updatedDocument).exec()
            .then(
                (document) => {
                    return {
                        status: 200,
                        message: "[OK] db update",
                        data: document,
                    }
                },
                (error) => {
                    return {
                        status: 500,
                        message: "[ERROR] db update",
                        error: error,
                    }
                }
            );
    }

    delete(query) {
        return this.model.deleteOne(query).exec()
            .then(
                (document) => {
                    return {
                        status: 200,
                        message: "[OK] db delete",
                        data: document,
                    }
                },
                (error) => {
                    return {
                        status: 500,
                        message: "[ERROR] db delete",
                        error: error,
                    }
                }
            );
    }
}

export default Service;