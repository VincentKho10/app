import mongoose from "mongoose";
import { MdbConn } from "../data/connection/conn_mongodb";

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
});

export = new MdbConn().getMdbCli().model('Role', RoleSchema);