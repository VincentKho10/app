import CustomError from "../ErrorStatus";
import { IChatroom, IUser } from "../IModelType";

function new_(params: {
    name?: string,
    username?: string,
    password?: string,
    email?: string,
    friends?: IUser[],
    chatrooms?: IChatroom[]
}): IUser {
    return {
        name: (params.name ?? ""),
        username: (params.username ?? ""),
        password: (params.password ?? ""),
        email: (params.email ?? ""),
        friends: (params.friends ?? []),
        chatrooms: (params.chatrooms ?? []),
    }
}

function isValidModel(modeltype: string, arg: unknown): Boolean {
    modeltype = modeltype.toLowerCase();
    if (!!arg &&
        typeof arg === "object" &&
        arg != (null || undefined)) {
        if(modeltype == 'user'){
            return('name' in arg &&
            'username' in arg &&
            'password' in arg &&
            'email' in arg &&
            'friends' in arg &&
            'chatrooms' in arg)
        // } else if (modeltype=='chatroom'){

        } else {
            return false;
        }
    }else{
        return false;
    }
}

function _from(modeltype: string, params: Object): IUser {
    if (isValidModel(modeltype, params)) {
        const nparams = params as IUser;
        return new_(params);
    }
    throw new CustomError('User Parameter Assign Error');
}

module.exports = {
    new: new_,
    isValidModel,
    from: _from,
} as const