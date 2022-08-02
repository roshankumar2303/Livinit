import mongoose, { Schema } from "mongoose";

class UserModel {
    constructor() {
        this.createSchema = this.createSchema.bind(this);
        this.getModel = this.getModel.bind(this);
    }

    private createSchema() {
        const schema = new Schema({
            username: {
                type: String,
                required: true,
                unique: true,
            },
            firstname: {
                type: String,
                required: true,
            },
            lastname: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            phone: {
                type: Number,
            },
        });
        return schema;
    }

    public getModel() {
        return mongoose.model("user-records", this.createSchema());
    }
}

export default new UserModel();
