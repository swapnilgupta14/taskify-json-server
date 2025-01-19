const jsonServer = require("json-server");
const cors = require("cors");
const fs = require("fs");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use(cors());
server.use(middlewares);

server.get("/", (req, res) => {
  const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  res.json(db);
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
