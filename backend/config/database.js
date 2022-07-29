import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class DatabaseConnection {
    constructor() {
        const databaseUri = process.env.DATABASE_URI;
        mongoose.connect(databaseUri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(
                () => {
                    console.log("Connected to MongoDB database...");
                },
                (error) => {
                    console.log("Error in connecting to MongoDB database...");
                    console.error(error);
                }
            );
    }
}

export default new DatabaseConnection();
