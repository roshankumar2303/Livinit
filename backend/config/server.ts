import express from "express";
import bodyParser from "body-parser";

import AuthRoutes from "../src/routes/AuthRoutes";

const server = express();

server.use(bodyParser.json());
server.use("/auth", AuthRoutes);

export default server;
