import dotenv from "dotenv";

import "./config/database";
import server from "./config/server";

dotenv.config();

const port = process.env.SERVER_PORT || "5000";
server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});