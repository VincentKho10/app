enum EnumRoles {
    Member,
    Admin,
}

export interface IUser{
    name: string;
    username: string;
    password: string;
    email: string;
    friends?: IUser[];
    chatrooms?: IChatroom[];
}

export interface IRole{
    name: string;
}

export interface IChatroom {
    name: string;
    roles: {
        member: IUser,
        role: EnumRoles
    };
    members: IUser[];
    messages: IMessage[];
}

export interface IMessage {
    sender: string;
    content: string;
}

