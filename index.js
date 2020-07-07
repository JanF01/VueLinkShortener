const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.port || 3000;

const urls = require("./");

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.static("./public"));

const Shortener = require("./routes/Shortener.js");

app.use("/api", Shortener);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
