import {Router} from 'express';
import { IExApp, IExNxt, IExReq, IExRes } from '../static/IExType';
import loginService from '../Services/AuthenticationServices';
import { IUser } from '../static/IModelType';
import { api_paths } from '../static/paths';

const router = Router();
const LoginApiHandler = async (req: IExReq, res: IExRes, next: IExNxt) => {
    try {
        const reqinp = req.body as IUser;
        const authStatus = await loginService(reqinp);
        // console.log({auth});
        res.json(authStatus);
    } catch (error) {
        next(error);
    }
}
const uRoutLog = api_paths.users.login;

router.post(uRoutLog, LoginApiHandler);
router.get(uRoutLog, (req,res)=>{
    res.json({message: 'LoginApi'})
})

module.exports = router;
