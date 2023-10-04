import mongoose, { Connection, Mongoose, createConnection } from "mongoose";
import CustomError from "../../static/ErrorStatus";
import { EventEmitter } from "stream";
// const mongoose = require('mongoose');

// export class Mdb{
//     private pool: Connection[] = [];

//     private availables: number[] = [];
//     private evem: EventEmitter = new EventEmitter();

//     constructor(maxPool: number){
//         for (let i=0; i<maxPool; i++){
//             this.pool[i] = createConnection(process.env.DB_URL as string);
//             this.availables.push(i);
//         }
//         this.evem.on('release', (id: number)=>{
//             this.availables.push(id);
//         })
//     }

//     getConnection(){
//         // if pool is not empty and pool is not full
//         if(this.availables.length > 0){
//             //return available connection
//             const avpool: number = this.availables.pop() as number;
//             return { id: avpool, conn: this.pool[avpool] };
//         } else {
//             //wait for available connection
//             return new Promise((resolve) => {
//                 this.evem.on('release', (id: number)=>{
//                     resolve(this.getConnection());
//                 });
//             });
//         }
//     }

//     releaseConnection(id: number){
//         this.evem.emit('release', id);
//     }

//     //add new connection
//     //remove connection
// }

export class MdbConn{
    private static _mdbcli = mongoose.createConnection(
        process.env.DB_URL as string,
        { maxPoolSize: 10, }
    );

    constructor(){
        console.log('connected to mongodb...');
    }

    getMdbCli(){
        return MdbConn._mdbcli;
    }

}

// export function connectMdb(): void{
//     mongoose.connect(`${process.env.DB_URL}`).catch((reason)=>{
//         console.log({reason});
//         throw new CustomError('Database Connection Failed.');
//     }).finally(()=>(console.log(`Connected to mongodb`)));
// }

// export async function closeMdb(): Promise<void>{
//     await mongoose.connection.close();
// }
