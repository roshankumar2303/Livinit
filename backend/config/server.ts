import express from "express";
import bodyParser from "body-parser";

import AuthRoutes from "../src/routes/AuthRoutes";
import UserRoutes from "../src/routes/UserRoutes";

const server = express();

server.use(bodyParser.json());
server.use("/auth", AuthRoutes);
server.use("/user", UserRoutes);

export default server;
