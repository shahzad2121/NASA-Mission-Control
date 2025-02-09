// Create a Map to store launch data (key-value pairs)
const launches = new Map(); 

// Launch object containing mission details
const launch = {
  flightNumber: 100, // Unique identifier
  mission: "Kepler Exploration X", // Mission name
  rocket: "Explorer IS1", // Rocket name
  launchDate: new Date("December 24, 2030"), // Convert string to Date object
  destination: "Kepler-442 b", // Target planet
  customer: ["shahzad", "NASA"], // Array of customers
  upcoming: true, // Status of the launch
  success: true, // Indicates if launch was successful
};

// Store the launch in the Map using flightNumber as the key
launches.set(launch.flightNumber, launch);

module.exports = { launches }; // Export the Map for external use
