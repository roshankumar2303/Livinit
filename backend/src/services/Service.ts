import { Model } from "mongoose";

class Service {
    protected model: Model<any>;

    constructor(model: Model<any>) {
        this.model = model;

        this.getAll = this.getAll.bind(this);
        this.find = this.find.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    public getAll() {
        return this.model
            .find({})
            .exec()
            .then(
                (documents) => {
                    return {
                        status: 200,
                        message: "[OK] db getAll",
                        data: documents,
                    };
                },
                (error) => {
                    return {
                        status: 500,
                        message: "[ERROR] db getAll",
                        error: error,
                    };
                }
            );
    }

    public find(query: any) {
        return this.model
            .findOne(query)
            .exec()
            .then(
                (document) => {
                    return {
                        status: 200,
                        message: "[OK] db get",
                        data: document,
                    };
                },
                (error) => {
                    return {
                        status: 500,
                        message: "[ERROR] db get",
                        error: error,
                    };
                }
            );
    }

    public insert(query: any) {
        return this.model.create(query).then(
            (document) => {
                return {
                    status: 200,
                    message: "[OK] db insert",
                    data: document,
                };
            },
            (error) => {
                return {
                    status: 500,
                    message: "[ERROR] db insert",
                    error: error,
                };
            }
        );
    }

    public update(query: any, updatedDocument: any) {
        return this.model
            .findOneAndUpdate(query, updatedDocument)
            .exec()
            .then(
                (document) => {
                    return {
                        status: 200,
                        message: "[OK] db update",
                        data: document,
                    };
                },
                (error) => {
                    return {
                        status: 500,
                        message: "[ERROR] db update",
                        error: error,
                    };
                }
            );
    }

    public delete(query: any) {
        return this.model
            .deleteOne(query)
            .exec()
            .then(
                (document) => {
                    return {
                        status: 200,
                        message: "[OK] db delete",
                        data: document,
                    };
                },
                (error) => {
                    return {
                        status: 500,
                        message: "[ERROR] db delete",
                        error: error,
                    };
                }
            );
    }
}

export default Service;
