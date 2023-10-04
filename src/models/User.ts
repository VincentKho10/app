import mongoose from 'mongoose';
import { IUser } from '../static/IModelType';
import { MdbConn } from '../data/connection/conn_mongodb';

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    username: {
        require: true,
        type: String,
    },
    password: {
        type: String,
        require: true,
    },
    roles:[{
        require: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Role',
    }],
    friends: [{
        require: false,
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
    }],
    chatrooms: [{
        require: false,
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Chatrooms',
    }],
    createdAt: {
        type: Date,
        default: Date.now(),
        immutable: true,
    },
});

export = new MdbConn().getMdbCli().model('User', UserSchema);