const { launches } = require("../../Models/launches.model");

function getAllLaunches(req, res) {
  // Convert the Map of launches into an array before sending it as JSON response
  return res.status(200).json(Array.from(launches.values()));
}

module.exports = {
  getAllLaunches,
};
