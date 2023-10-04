import {Application, Request, Response, ErrorRequestHandler, NextFunction} from 'express';

export interface IExApp extends Application {}
export interface IExReq extends Request {}
export interface IExRes extends Response {}
export interface IExErr extends ErrorRequestHandler {}
export interface IExNxt extends NextFunction {}