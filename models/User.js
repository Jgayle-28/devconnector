const mongoose = require("mongoose");
const schema = mongoose.Schema;

// What each user will contain -> Object of objects
const UserSchema = new schema({
  // To define a field in a schema you create an object with type & required
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now //Sets the current date
  }
});

// module.exports = Set Variable = mongoose.model('model name', model Schema)
module.exports = User = mongoose.model("users", UserSchema);
