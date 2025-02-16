const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://shahzad:Xl6KZY2puREjFtI5@nasacluster.7j16o.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster";

mongoose.connection.on("open", () => {
  console.log("DB is connected");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}
async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect };
