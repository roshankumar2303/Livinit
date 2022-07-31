import { Model } from "mongoose";

class Service {
    static ERR_PAYLOAD = {
        status: 500,
        data: null,
        message: {
            type: "ERROR",
            body: "Possible error(s) in using/querying Database Models",
        },
    };

    protected model: Model<any>;

    constructor(model: Model<any>) {
        this.model = model;

        this.findOne = this.findOne.bind(this);
        this.findAll = this.findAll.bind(this);
        this.createOne = this.createOne.bind(this);
        this.updateOne = this.updateOne.bind(this);
        this.deleteOne = this.deleteOne.bind(this);
    }

    public async findOne(query: any) {
        try {
            const document = await this.model.findOne(query).exec();
            return {
                status: document === null ? 404 : 200,
                data: document,
                message: {
                    type: document === null ? "NOT_FOUND" : "OK",
                    body:
                        document === null
                            ? "No Record found"
                            : "Record fetched successfully",
                },
            };
        } catch (error) {
            console.error(error);
            return Service.ERR_PAYLOAD;
        }
    }

    public async findAll() {
        try {
            const documents = await this.model.find({}).exec();
            return {
                status: documents.length === 0 ? 404 : 200,
                data: documents,
                message: {
                    type: documents.length === 0 ? "NOT_FOUND" : "OK",
                    body:
                        documents.length === 0
                            ? "No Records found"
                            : "Records fetched successfully",
                },
            };
        } catch (error) {
            console.error(error);
            return Service.ERR_PAYLOAD;
        }
    }

    public async createOne(query: any) {
        try {
            const document = await this.model.create(query);
            return {
                status: 200,
                data: document,
                message: {
                    type: "OK",
                    body: "Record created successfully",
                },
            };
        } catch (error) {
            console.error(error);
            return Service.ERR_PAYLOAD;
        }
    }

    public async updateOne(query: any, updatedData: any) {
        try {
            const document = await this.model
                .findOneAndUpdate(query, updatedData)
                .exec();
            return {
                status: 200,
                data: document,
                message: {
                    type: "OK",
                    body: "Record updated successfully",
                },
            };
        } catch (error) {
            console.error(error);
            return Service.ERR_PAYLOAD;
        }
    }

    public async deleteOne(query: any) {
        try {
            const document = await this.model.deleteOne(query).exec();
            return {
                status: 200,
                data: document,
                message: {
                    type: "OK",
                    body: "Record deleted successfully",
                },
            };
        } catch (error) {
            console.error(error);
            return Service.ERR_PAYLOAD;
        }
    }
}

export default Service;
