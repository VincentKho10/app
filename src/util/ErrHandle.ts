// import CustomError from "../static/ErrorStatus";
// import { IExApp, IExReq, IExRes } from "../static/IExType";

// export function errorHandling(error: any, req:IExApp, res: IExReq, next: any) {
//     if (e instanceof CustomError){
//         app.use('/err', (req: IExReq, res: IExRes) => {
//             res.status(500).json({error: e.message});
//         });
//     }else{
//         console.log({e});
//         app.use('/err', (req: IExReq, res: IExRes) => {
//             res.status(500).json({error: 'Internal Server Error'});
//         });
//     }
//     next();
// }