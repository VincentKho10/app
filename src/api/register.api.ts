import { Router } from "express";
import { crudService } from "../Services/Admin/CrudServices";
import { IExApp, IExErr, IExNxt, IExReq, IExRes } from "../static/IExType";
import { IUser } from "../static/IModelType";
import { api_paths } from "../static/paths";
import CustomError from "../static/ErrorStatus";

const router = Router();
const RegisterApiHandler = async (req: IExReq, res: IExRes, next: IExNxt)=>{
    const reqinp = req.body as IUser;
    try {
        if(reqinp){
            const user = await crudService({
                action: 'create', 
                objtype: 'user', 
                body: reqinp
            });
            res.json({message: `user ${reqinp.email} was added successfully`});
        }else{
            throw new CustomError('Registration requirement not met');
        }
    } catch(err) {
        next(err);
    }
}

const uRouteReg = api_paths.users.register;

router.post(uRouteReg, RegisterApiHandler);

router.get(uRouteReg, (req, res)=>{
    res.json({message: 'Registrationapi'})
});

module.exports = router;