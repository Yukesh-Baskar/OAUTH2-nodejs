const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.status(400).send("User not logged in yet!");
};

module.exports = {
  isLoggedIn,
};

