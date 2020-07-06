const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.port || 3000;

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
