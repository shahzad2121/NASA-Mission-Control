// Import the required modules
const { parse } = require("csv-parse"); // Parses CSV data
const fs = require("fs"); // Handles file system operations
const path = require("path");

// Initialize an empty array to store habitablePlanets planets
const habitablePlanets = [];

// Function to check if a planet is habitablePlanets based on certain conditions
function isHabitaable(planet) {
  // Checks if the planet is confirmed, has the right amount of sunlight, and a suitable radius
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 && // Planet's sunlight must be between 0.36 and 1.11
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  ); // Planet's radius must be smaller than 1.6
}

function loadPlanetsData() {
  // Read the CSV file and parse it line by line
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..","..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#", // Ignore any line starting with "#" (comments)
          columns: true, // Treat the first row as column headers
        })
      )
      .on("data", (data) => {
        // For each row (planet data), check if the planet is habitablePlanets
        if (isHabitaable(data)) {
          habitablePlanets.push(data); // If it's habitablePlanets, add it to the habitablePlanets array
        }
      })
      .on("error", (err) => {
        // Handle any errors that occur while reading or parsing the file
        console.log("no data found", err);
        reject(err);
      })
      .on("end", () => {
        // Once the parsing is complete, log the names of habitablePlanets planets

        // Log how many planets are habitablePlanets
        console.log(`${habitablePlanets.length} planets are habitablePlanets`);
        // Optional: Log a message indicating the end of processing
        // console.log("no more data");
        resolve();
      });
  });
}

module.exports = {
  loadPlanetsData,
  planets: habitablePlanets,
};
