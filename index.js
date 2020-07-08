const express = require("express");
const url = require("url");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.port || 3000;

const Short = require("./models/short.js");

const urls = require("./");

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.static("./public"));

const Shortener = require("./routes/Shortener.js");

app.use("/api", Shortener);

app.get("/:name", async function (req, res) {
  console.log(req.params.name);

  try {
    await Short.findOne({
      where: {
        name: req.params.name,
      },
    }).then(
      (short) => {
        if (short) {
          res.writeHead(302, {
            Location: short.url
          });
          res.end();
        }
      },
      (error) => {
        res.send(error);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});