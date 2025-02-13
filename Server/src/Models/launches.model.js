const launches = new Map(); // Map to store all launches with flightNumber as key

let latestFlightNumber = 100; // Track the latest flight number

// Launch object containing mission details
const launch = {
  flightNumber: 100, // Unique identifier for the launch
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 24, 2030"), // Convert string to Date object
  target: "Kepler-442 b",
  customers: ["shahzad", "NASA"],
  upcoming: true, // Indicates if the launch is scheduled
  success: true, // Whether the launch was successful
};

// Store the launch in the Map using flightNumber as the key
launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}

// Function to retrieve all launches stored in the Map
function getAllLaunches() {
  return Array.from(launches.values()); // Convert Map to an array for easy JSON conversion
}

// Function to add a new launch to the Map
function addNewLaunch(launch) {
  latestFlightNumber++; // Increment flight number to ensure uniqueness

  launches.set(
    latestFlightNumber, // Use latestFlightNumber as the key
    Object.assign(launch, {
      // `Object.assign(target, source)` merges properties into the target object
      // Ensures that each launch has required properties
      customers: ["Shahzad", "NASA"], // Default customer list
      upcoming: true, // Mark as an upcoming launch
      success: true, // Assume success initially
      flightNumber: latestFlightNumber, // Assign unique flight number
    })
  );
}

function abortLaunchWithId(launchId) {
    const aborted = launches.get(launchId)
    aborted.upcoming = false;
    aborted.success = false;
    return aborted
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchWithId
};
