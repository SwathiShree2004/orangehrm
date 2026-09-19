import { randomUUID } from "crypto";


export interface User{
    id:string;
    username:string;
    email:string;
}

const users :User[] =[];

export const fakedb={
    async createUser(username:string,email:string):Promise<User>{
        const user:User={
            id:randomUUID(),
            username:username,
            email:email
        };
        users.push(user);
        console.log(users)
        return user;
    },
    async findUser(id:string):Promise<User |undefined>{
        return users.find(user =>user.id ===id);
    },
    async DeleteUser(id:string):Promise<void>{
        const index =users.findIndex(user =>user.id === id);
        if(index !==-1){
            users.splice(index,1);
        }
    },
    async counterUser():Promise<number>{
        return users.length;
    },
    async DeleteAllUsers():Promise<void>{
        users.length =0;
    }
};