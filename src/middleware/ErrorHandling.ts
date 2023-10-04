import CustomError from "../static/ErrorStatus";
import { IExErr, IExNxt, IExReq, IExRes } from "../static/IExType";

export default function errorHandingMiddleware(error: IExErr, req: IExReq, res: IExRes, next: IExNxt): void {
    if(error instanceof CustomError){
        res.status(404).json({message: error.message});
    }else{
        res.status(500).json({ error: 'Internal Server Error' })
    }
    console.log({error});
    next();
}
