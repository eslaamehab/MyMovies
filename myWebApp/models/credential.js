const mongoose = require("mongoose");

const credentialSchema = mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("Credentials", credentialSchema);
