import { Model } from "mongoose";

class Service {
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
                status: 200,
                data: document,
                message: {
                    type: "OK",
                    body: "Single Record fetched successfully",
                },
            };
        } catch (error) {
            console.error(error);
            return {
                status: 500,
                error: error,
                message: {
                    type: "ERROR",
                    body: "Error in fetching Single Record",
                },
            };
        }
    }

    public async findAll() {
        try {
            const documents = await this.model.find({}).exec();
            return {
                status: 200,
                data: documents,
                message: {
                    type: "OK",
                    body: "Multiple Records fetched successfully",
                },
            };
        } catch (error) {
            console.error(error);
            return {
                status: 500,
                error: error,
                message: {
                    type: "ERROR",
                    body: "Error in fetching Multiple Records",
                },
            };
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
                    body: "Single Record created successfully",
                },
            };
        } catch (error) {
            console.error(error);
            return {
                status: 500,
                error: error,
                message: {
                    type: "ERROR",
                    body: "Error in creating Single Record",
                },
            };
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
                    body: "Single Record updated successfully",
                },
            };
        } catch (error) {
            console.error(error);
            return {
                status: 500,
                error: error,
                message: {
                    type: "ERROR",
                    body: "Error in updating Single Record",
                },
            };
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
                    body: "Single Record deleted successfully",
                },
            };
        } catch (error) {
            console.error(error);
            return {
                status: 500,
                error: error,
                message: {
                    type: "ERROR",
                    body: "Error in deleting Single Record",
                },
            };
        }
    }
}

export default Service;
