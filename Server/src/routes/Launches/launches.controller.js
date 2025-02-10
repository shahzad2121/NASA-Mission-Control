const { getAllLaunches, addNewLaunch } = require("../../Models/launches.model");

function httpGetAllLaunches(req, res) {
  // Convert the Map of launches into an array before sending it as JSON response
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;

  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.destination){
    return res.status(400).json({
       error: 'Launch properties are not filled'
    })
  }

  launch.launchDate = new Date(launch.launchDate);

  if(isNaN(launch.launchDate)){
    return res.status(400).json({
        error: 'invalid launch Date'
    })
  }


  addNewLaunch(launch);
  res.status(201).json(launch);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
};
