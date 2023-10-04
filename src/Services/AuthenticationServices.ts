import mongoose, { Document } from "mongoose";

import { getAnyUser } from "../data/repositories/UserRepositories";
import { IUser } from "../static/IModelType";

import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';
import { RedisConn } from "../data/connection/conn_redis";
import CustomError from "../static/ErrorStatus";

export default async function loginService(credential: IUser): Promise<any> {

    const logged_user = await getAnyUser({
        email: credential.email,
    }) as any;
    const ret_logged_user = logged_user[0];
    const validUser = await bcrypt.compare(credential.password, (ret_logged_user as IUser).password);
    console.log(ret_logged_user)
    if (validUser){
        const payload = ret_logged_user._id
        const token = jwt.sign(payload.toString(), process.env.API_KEY as string);
        const redis = new RedisConn().getRedisClient();
        // if(){

        // }
        redis.set(token, ret_logged_user, (err,result)=>{
            if(!result){
                if (err) {
                    throw new CustomError('Error setting key-value pair');
                } else {
                    throw err;
                }
            }
        });
        return { message: 'Login Successful', token: token };
    }else{
        return { message: 'credential not found' };
    }
}