const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const configRoutes = require("../config/routes.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

configRoutes(server);

module.exports = {
  server
};
