import express from "express";
import { IExApp, IExReq, IExRes } from "../static/IExType";
import { public_paths } from "../static/paths";
// const path = require('path');
import path from 'path';

// const routers = express.Router();

// public_paths.forEach((v) => {
//     routers.get(v, (req: IExReq, res: IExRes)=>{
//         // const path = __dirname.split('\\');
//         // path.pop();
//         // const joinpath = path.join('\\');
//         res.sendFile(path.join(__dirname,`/../view${v}.html`));
//     });
// });

// module.exports = routers;

export default function publicRoutes(app:IExApp){
    const public_routing = (exp: IExApp, route: string)=>{
        exp.get(route, (req: IExReq, res: IExRes)=>{
            // const path = __dirname.split('\\');
            // path.pop();
            // const joinpath = path.join('\\');
            res.sendFile(path.join(__dirname,`/../view${route}.html`));
        });
    }
    
    public_paths.forEach((path) => {
        public_routing(app, path);
    });
}