const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().min(3).max(200).email().required(),
  password: Joi.string().min(6).max(1024).required(),
});

exports.userSchema = userSchema;
