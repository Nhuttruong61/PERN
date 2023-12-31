const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const dbconnect = require("./config/dbconnect");
const initRoute = require("./route/index");
const { errorHandler } = require("./middleware/errorHandler");
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
initRoute(app);
dbconnect();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
