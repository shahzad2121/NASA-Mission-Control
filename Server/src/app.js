const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const planetsRouter = require("./routes/Planets/planets.router");
const launchesRouter = require("./routes/Launches/launches.router");
const app = express();

//this will allow localhost:3000 to access data from our server
//there is also whitelisting for multiple origins
app.use(cors({
  allowedHeaders:'*'
}));
app.use(morgan("combined"));

app.use(express.json());

app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);


const user = { name: "Shahzad", age: 22, city: "Lahore" };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}



app.use(express.static(path.join(__dirname, "..", "public")));
//* will count every endpoint after / and express will check it in the middlewares and
// if the route is not present it will handle it to the index.html and then the
// framework(React) will handle this route.
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
