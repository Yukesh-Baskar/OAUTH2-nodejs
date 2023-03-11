const mongoose = require("mongoose");

module.exports = DB_connect = (app) => {
  mongoose.connect(process.env.DB_CONNECT_URL);
  mongoose.connection.once("open", () => {
    console.log("DB connected successfully");
    app.emit("ready");
  });
};
