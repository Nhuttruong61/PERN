const { badRequestUrl, errorHandler } = require("../middleware/errorHandler");
const auth = require("./auth");
const user = require("./user");
const property = require("./property");

const initRoute = (app) => {
  app.use("/api/auth", auth);
  app.use("/api/user", user);
  app.use("/api/property", user);
  app.use("/", badRequestUrl);
  app.use(errorHandler);
};
module.exports = initRoute;
