const launches = new Map(); // Map to store all launches with flightNumber as key

let latestFlightNumber = 100; // Track the latest flight number

// Launch object containing mission details
const launch = {
  flightNumber: 100, // Unique identifier for the launch
  mission: "Kepler Exploration X", 
  rocket: "Explorer IS1", 
  launchDate: new Date("December 24, 2030"), // Convert string to Date object
  destination: "Kepler-442 b", 
  customer: ["shahzad", "NASA"], 
  upcoming: true, // Indicates if the launch is scheduled
  success: true, // Whether the launch was successful
};

// Store the launch in the Map using flightNumber as the key
launches.set(launch.flightNumber, launch); 
// `.set(key, value)` adds a key-value pair to the Map
// Key: `launch.flightNumber` (100) 
// Value: The `launch` object containing all mission details

// Function to retrieve all launches stored in the Map
function getAllLaunches() {
  return Array.from(launches); // Convert Map to an array for easy JSON conversion
}

// Function to add a new launch to the Map
function addNewLaunch(launch) {
  latestFlightNumber++; // Increment flight number to ensure uniqueness

  launches.set(
    latestFlightNumber, // Use latestFlightNumber as the key
    Object.assign(launch, {  
      // `Object.assign(target, source)` merges properties into the target object
      // Ensures that each launch has required properties
      customer: ["Shahzad", "NASA"], // Default customer list
      upcoming: true, // Mark as an upcoming launch
      success: true, // Assume success initially
      flightNumber: latestFlightNumber, // Assign unique flight number
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
}; 
