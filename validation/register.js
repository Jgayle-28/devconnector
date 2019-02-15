const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Check if name is empty if it is change it to and empty string
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "You must enter a user name";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Password must match";
  }
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "You must enter a user email";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
