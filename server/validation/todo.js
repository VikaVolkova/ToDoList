const Joi = require("joi");

const todoSchema = Joi.object({
  name: Joi.string().min(3).max(200).required(),
  author: Joi.string().min(3).max(30),
  uid: Joi.string(),
  isComplete: Joi.boolean(),
  date: Joi.date(),
});

exports.todoSchema = todoSchema;
