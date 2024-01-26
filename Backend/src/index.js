const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const router = require("./Routes/router.js")
const sequelize = require("./utils/database.js")
const association = require("./Model/associations");

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    cors()
)

const port = 3001

app.use("/", router)


async function startServer() {
  try {
    await association.association();
    await sequelize.sync(
      { force: true } // Reset db every time
    );
    app.listen(port, function () {
      console.log("listen on port " + port);
    });
  } catch (error) {
    console.log(error);
  }
}
startServer();