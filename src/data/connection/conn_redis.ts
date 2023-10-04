import Redis from 'ioredis';
import CustomError from '../../static/ErrorStatus';
import { EventEmitter } from 'stream';


export class RedisConn{
    private static _rediscli = new Redis(process.env.REDIS_URL as string);
    
    constructor(){
        RedisConn._rediscli.on('connect', ()=> console.log(`connected to redis...`));
    
        RedisConn._rediscli.on('error', (err) => {
            console.error({err});
            throw new CustomError('Unable to connect to redis');
        });
    }

    public getRedisClient(){
        return RedisConn._rediscli;
    }
}