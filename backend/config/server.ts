import express from "express";
import bodyParser from "body-parser";

import UserCredRoutes from "../src/routes/UserCredRoutes";

const server = express();

server.use(bodyParser.json());
server.use('/user-creds', UserCredRoutes);

export default server;