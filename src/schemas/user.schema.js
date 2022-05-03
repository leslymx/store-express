const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const username = Joi.string().min(5);
const active = Joi.boolean();
const role = Joi.string().min(5);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  userName: username.required(),
  role: role
});

const updateUserSchema = Joi.object({
  email: email,
  active: active,
  role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
