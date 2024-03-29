import "./config/database";
import server from "./config/server";

const port = process.env.SERVER_PORT || "4000";
server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
