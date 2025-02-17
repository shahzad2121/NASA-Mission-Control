const {
  getAllLaunches,
  scheduleNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
} = require("../../Models/launches.model");
const getPagenation  = require("../../services/query");

async function httpGetAllLaunches(req, res) {
  const {skip, limit} = getPagenation(req.query);
  const launches = await getAllLaunches(skip, limit)
  return res.status(200).json(launches);
}

async function httpAddNewLaunch(req, res) {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Launch properties are not filled",
    });
  }

  launch.launchDate = new Date(launch.launchDate);

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "invalid launch Date",
    });
  }

  await scheduleNewLaunch(launch);
  res.status(201).json(launch);
}

async function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);
  //if the launch with id doesn't exist
  const launchExist = await existsLaunchWithId(launchId);

  if (!launchExist) {
    return res.status(404).json({
      error: "Launch doesn't exist",
    });
  }

  //if the launch exist
  const aborted = await abortLaunchById(launchId);

  if (!aborted) {
    return res.status(400).json({
      error: "Launch is not aborted",
    });
  }
  return res.status(200).json({
    ok: true,
  });
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
};
