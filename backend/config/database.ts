import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

class DatabaseConnection {
    constructor() {
        const databaseUri = process.env.DATABASE_URI || "";
        mongoose.connect(databaseUri).then(
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
