//import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {LoginData} from '../test-data/logindata';
import{getFutureDate} from '../utils/dateUtils';
import { generateRandomEmail,generateRandomFirstName } from '../utils/randomDataGenerator';
import {capitalize} from '../utils/stringHelpers'
import {test,expect} from '../fixtures/base-fixture'
import {createUser} from '../factory/userFactory'

test('OrangeHRM login test',async({page,loginPage})=>{
    //const loginPage = new LoginPage(page);
    const username =LoginData.username;
    const password =LoginData.password;

    await loginPage.open();
    await loginPage.login(username,password);
    await expect(page).toHaveURL(/dashboard/);


    const firstname =generateRandomFirstName();
    const email=generateRandomEmail(firstname);

    const name=capitalize(firstname);
    const futureDate=getFutureDate(7);
    console.log('firstname:',firstname);
    console.log('Nmae:',name);
    console.log('Random Email:',email);
    console.log('Future Date:',futureDate);

    //factory
    const user1=createUser();
    console.log(user1);
    console.log(user1.firstName);
    console.log(user1.lastName);
    console.log(user1.email);
    console.log(user1.username);
    console.log(user1.password);


});