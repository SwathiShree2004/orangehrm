
import {generateRandomEmail,generateRandomUsername,generateRandomFirstName} from '../utils/randomDataGenerator'

export interface User{
    firstName:string;
    lastName:string;
    username:string;
    email:string;
    password:string;
}
export function createUser():User{
    const firstName=generateRandomFirstName();
    return{
        firstName: firstName,
        lastName:'test',
        username:generateRandomUsername(firstName),
        email:generateRandomEmail(firstName),
        password:'Password123!'
    };
}