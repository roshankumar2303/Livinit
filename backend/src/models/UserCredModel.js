import mongoose, { Schema } from "mongoose";

class UserCredModel {
    constructor() {
        this.getSchema = this.getSchema.bind(this);
        this.getModel = this.getModel.bind(this);
    }

    getSchema() {
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

    getModel() {
        return mongoose.model("user-creds", this.getSchema());
    }
}

export default UserCredModel;