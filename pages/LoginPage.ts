import {Page,Locator} from '@playwright/test';
import { logger } from '../logger/logger';
import { CommonActions } from '../wrapper/safeActions';
import {baseUrl} from '../config/environment'

export class LoginPage{
    private readonly actions =new CommonActions();
    private readonly usernameInput:Locator;
    private readonly passwordInput:Locator;
    private readonly LoginButton:Locator;

    constructor(private readonly page:Page){
        this.usernameInput=page.getByPlaceholder('Username');
        this.passwordInput=page.getByPlaceholder('Password');
        this.LoginButton=page.getByRole('button',{name:'Login'});

    }
    async open():Promise<void>{
        logger.info('opening OrangeHRM login page');
        await this.page.goto(baseUrl);
    
    }
    async login(username:string,password:string):Promise<void>{
    await this.actions.fillText(this.usernameInput,username,'Username field');
    await this.actions.fillText(this.passwordInput,password,'Password field');
    await this.actions.ClickElement(this.LoginButton,'Login button');
    } 
}
// Page Object: A class that keeps a page's locators and actions in one place.
// Constructor: Used to receive and initialize the Page object before using it.
// Page Object best practice: Keep the Page, locators, and page actions together in one class.
// readonly: Allows a value to be assigned once and not reassigned later.
// "this" refers to the current class object and is used to access its properties and methods.