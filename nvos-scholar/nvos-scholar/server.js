const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/dist"));

app.get("/dist/ontology.html", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/ontology.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

const port = process.env.PORT || 3000;
app.set("port", port);
const server = http.createServer(app);

server.listen(port, (req, res) => {
  console.log(`Running on port ${port}`);
});
