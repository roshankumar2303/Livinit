import mongoose, { Schema } from "mongoose";

class UserCredModel {
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
            password: {
                type: String,
                required: true,
            },
        });
        return schema;
    }

    public getModel() {
        return mongoose.model("user-creds", this.createSchema());
    }
}

export default new UserCredModel();
