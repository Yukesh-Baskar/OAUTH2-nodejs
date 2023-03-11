const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  facebook_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserModel);
