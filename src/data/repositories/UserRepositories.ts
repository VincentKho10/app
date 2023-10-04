import mongoose from 'mongoose';
import User from '../../models/User';
import { ObjectId } from 'mongoose';
import { IUser } from '../../static/IModelType';
import CustomError from '../../static/ErrorStatus';
// const User = require('../../models/User');
import { randomInt } from "crypto";

const bcrypt = require("bcrypt");

export const getAllUser = async () => {
    return await User.find();
}

export const getAnyUser = async (param: Object): Promise<IUser> => {
    const user = await User.find(param) as unknown;
    if(user as IUser){
        return user as IUser;
    }else{
        throw new CustomError('User not found');
    }
}

export const createUser = async (user: IUser) => {
    const saltRounds = randomInt(10, 13);
    user.friends = [];
    user.chatrooms = [];
    const salt = await bcrypt.genSalt(saltRounds);
    user.password = await bcrypt.hash(user.password, salt);
    await User.create(user).catch(err => {
        if (err.code === 11000) {
            throw new CustomError("Duplicate email address");
        } else {
            console.log({err})
            throw new Error(err.message);
        }
    });
}

export const updateUser = async (id: string, change: IUser) => {
    let user = await User.findById(id);
    if (user) {
        user.set(change);
        user.save();
    } else {
        throw new CustomError(`User not found`)
    }
}

export const deleteUser = async (id: string) => {
    let user = await User.findById(id);
    if (user) {
        user.deleteOne({ _id: id });
    } else {
        throw new CustomError(`User not found`)
    }
}