const http = require("http");

const app = require("./app");
const { loadPlanetsData } = require("./Models/planets.model");

//this will check the specified port in the environment otherwise it will use port 8000
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
  });
}

startServer();
