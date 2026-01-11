const express = require('express');
const {Signup, Login} = require('./../controllers/auth.controller');
const {createUserValidation, loginValidation} = require('./../validations/auth.validation');

const authRouter = express.Router();

authRouter.post('/auth/signup',createUserValidation, Signup);
authRouter.post('/auth/login',loginValidation, Login);


module.exports = authRouter;