const express = require("express");

const planetsRouter = require("./Planets/planets.router");
const launchesRouter = require("./Launches/launches.router");

const api = express.Router();

api.use("/planets", planetsRouter);
api.use("/launches", launchesRouter);

module.exports = { api };
