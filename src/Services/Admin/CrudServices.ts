import { createUser, deleteUser, getAllUser, getAnyUser, updateUser } from "../../data/repositories/UserRepositories";
import { createRole, deleteRole, getAllRole, getAnyRole, updateRole } from "../../data/repositories/RoleRepositories";
import CustomError from "../../static/ErrorStatus";
import { IUser } from "../../static/IModelType";

export async function crudService(
    conf: {
        objtype: string,
        action: string,
        id?: string,
        body?: IUser
    }
) {
    let getAllMethod = null;
    let getOneMethod = null;
    let createMethod = null;
    let updateMethod = null;
    let deleteMethod = null;

    if (conf.objtype === 'user') {
        getAllMethod = getAllUser;
        getOneMethod = getAnyUser;
        createMethod = createUser;
        updateMethod = updateUser;
        deleteMethod = deleteUser;
    }else if (conf.objtype === 'role') {
        getAllMethod = getAllRole;
        getOneMethod = getAnyRole;
        createMethod = createRole;
        updateMethod = updateRole;
        deleteMethod = deleteRole;
        // } else if (objtype === 'chatroom') {

        // } else if (objtype === 'message') {

    } else {
        throw new Error()
    }

    if (conf.action === 'getAll') {
        return getAllMethod();
    } else if (conf.action === 'getOne') {
        if (conf.id) {
            return getOneMethod(conf.id);
        }
        throw Error();
    } else if (conf.action === 'create') {
        console.log(conf.body)
        if (conf.body) {
            return await createMethod(conf.body);
        }else{
            throw new Error();
        }
    } else if (conf.action === 'update') {
        if (conf.id && conf.body) {
            return updateMethod(conf.id, conf.body);
        }
        throw Error();
    } else if (conf.action === 'delete') {
        if (conf.id) {
            return deleteMethod(conf.id);
        }
        throw Error();
    }
}