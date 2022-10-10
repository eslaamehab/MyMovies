// Validation Imports
const Joi = require("@hapi/joi");

// Register Validation
const validateRegister = (data) => {
  const validationSchema = Joi.object({
    firstname: Joi.string().min(3).required(),
    lastname: Joi.string().min(3).required(),
    email: Joi.string().min(6).required().email(),
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
  });
  return validationSchema.validate(data);
};

// Login Validation
const validateLogin = (data) => {
  const validationSchema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
  });
  return validationSchema.validate(data);
};

module.exports.validateRegister = validateRegister;
module.exports.validateLogin = validateLogin;
