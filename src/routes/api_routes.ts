import express from "express";
import { IExApp, IExReq, IExRes } from "../static/IExType";
import { api_paths } from "../static/paths";

const RegisterUser = require('../api/register.api');
const LoginUser = require('../api/login.api');

const route = express.Router();
const uPath = api_paths.users.base;

route.use(uPath, LoginUser);
route.use(uPath, RegisterUser);

module.exports = route;