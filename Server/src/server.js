const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");
const { loadPlanetsData } = require("./Models/planets.model");

const MONGO_URL =
  "mongodb+srv://shahzad:Xl6KZY2puREjFtI5@nasacluster.7j16o.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster";

//this will check the specified port in the environment otherwise it will use port 8000
const PORT = process.env.PORT || 8000;

mongoose.connection.once("open", () => {
  console.log("database is connected");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

const server = http.createServer(app);

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
  });
}

startServer();
