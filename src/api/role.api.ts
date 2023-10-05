import { Router } from "express";
import { api_paths } from "../static/paths";
import { IRole } from "../static/IModelType";
import { IExNxt, IExReq, IExRes } from "../static/IExType";
import { crudService } from "../Services/Admin/CrudServices";
import CustomError from "../static/ErrorStatus";

const router = Router();

const rolePath = `${api_paths.roles.crud}/${api_paths.roles.base}`

const getAllHandler = async (req: IExReq, res: IExRes, next: IExNxt) => {
    const reqinp = req.body as IRole;
    try{
        const role = await crudService({
            action: 'getAll',
            objtype: 'role',
        })
        res.json({ data: role, })
    }catch(err){
        next(err);
    }
}

const getOneHandler = async (req: IExReq, res: IExRes, next: IExNxt) => {
    const reqid = req.params as unknown as string;
    try{
        const role = await crudService({
            action: 'getAll',
            objtype: 'role',
            id: reqid,
        })
        res.json({ data: role, })
    }catch(err){
        next(err);
    }
}

const createHandler = async (req: IExReq, res: IExRes, next: IExNxt) => {
    const reqinp = req.body as unknown as IRole;
    try{
        const role = await crudService({
            action: 'create',
            objtype: 'role',
            body: reqinp,
        })
        res.json({ data: role, })
    }catch(err){
        next(err);
    }
}

const updateHandler = (req: IExReq, res: IExRes, next: IExNxt) => {

}

const deleteHandler = (req: IExReq, res: IExRes, next: IExNxt) => {

}

//getAll Role
router.get(rolePath, getAllHandler)

//getOne Role
router.get(`${rolePath}/:id`, getOneHandler)

//create Role
router.post(`${rolePath}`, createHandler)

//update Role
router.put(`${rolePath}`, updateHandler)

//delete Role
router.delete(`${rolePath}/:id`, deleteHandler)