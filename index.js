const epxress = require("express");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = epxress();
require("dotenv").config();

// middlewares
app.use(
  sessions({
    secret: process.env.SESSION_SECRET, // random secret
    resave: false, // save when the change of session
    saveUninitialized: false, // Saves the not modified sesstion to the store
  })
);
app.use(epxress.json()); // parse the incoming request with JSON
app.use(bodyParser.urlencoded({ extended: true })); // for accessing the body in x-www-form-urlencoded
app.use(passport.session()); // passport stores the user details in session while serializing so we need this middleware.
app.use(passport.initialize()); // initializes the passport
app.use(cookieParser()); // parser the cookies
app.set("view engine", "ejs"); // view engines

// DB Connect
const DB_connect = require("./config/db.config");
DB_connect(app);

// Configuring OAUTH
const configure_oauth = require("./config/oauth.config");
configure_oauth();

// User route
app.use("/user", require("./routes/userRoutes"));

// connecting to the server after the db emission is ready
app.on("ready", () => {
  app.listen(process.env.PORT, (err) => {
    if (err) return console.log(`Error while connecting to server ${err}`);
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
