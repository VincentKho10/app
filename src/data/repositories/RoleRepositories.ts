import mongoose from 'mongoose';
import Role from '../../models/Role';
import { ObjectId } from 'mongoose';
import { IRole } from '../../static/IModelType';
import CustomError from '../../static/ErrorStatus';
// const Role = require('../../models/Role');
import { randomInt } from "crypto";

const bcrypt = require("bcrypt");

export const getAllRole = async () => {
    return await Role.find();
}

export const getAnyRole = async (param: Object): Promise<IRole> => {
    const role = await Role.find(param) as unknown;
    if(role as IRole){
        return role as IRole;
    }else{
        throw new CustomError('Role not found');
    }
}

export const createRole = async (role: IRole) => {
    await Role.create(role).catch(err => {
        if (err.code === 11000) {
            throw new CustomError("Duplicate role");
        } else {
            console.log({err})
            throw new Error(err.message);
        }
    });
}

export const updateRole = async (id: string, change: IRole) => {
    let role = await Role.findById(id);
    if (role) {
        role.set(change);
        role.save();
    } else {
        throw new CustomError(`Role not found`)
    }
}

export const deleteRole = async (id: string) => {
    let role = await Role.findById(id);
    if (role) {
        role.deleteOne({ _id: id });
    } else {
        throw new CustomError(`Role not found`)
    }
}