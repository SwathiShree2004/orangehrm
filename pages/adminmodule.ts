import { Page, Locator } from '@playwright/test';
export class AdminPage {
    private readonly Adminmenu: Locator;
    private readonly addButton: Locator;
    private readonly addUser_heading: Locator;
    private readonly User_role: Locator;
    private readonly User_role_ess: Locator;
    private readonly Employeename: Locator;
    private readonly Employeename_Autocomplete: Locator;
    private readonly Status: Locator;
    private readonly Status_enable: Locator;
    private readonly Username: Locator;
    private readonly Password: Locator;
    private readonly ConfirmPassword: Locator;
    private readonly Save: Locator;
    private readonly Search_System_User: Locator;
    private readonly Search_button: Locator;
    private readonly founda: Locator;


    constructor(private readonly page: Page) {
        this.Adminmenu = page.getByRole('link', { name: 'Admin' });
        this.addButton = page.getByRole('button', { name: 'Add' });
        this.addUser_heading = page.getByText('Add User', { exact: true });
        this.User_role = page.locator('.oxd-select-wrapper').first();
        this.User_role_ess = page.getByRole('option', { name: 'ESS' });
        this.Employeename = page.locator('input[placeholder="Type for hints..."]');
        this.Employeename_Autocomplete = page.locator('.oxd-autocomplete-option').first();
        this.Status = page.locator('.oxd-select-wrapper').nth(1);
        this.Status_enable = page.getByRole('option', { name: 'Enabled' });
        this.Username = page.locator('div:nth-child(4) input.oxd-input');
        this.Password = page.locator('input[type="password"]').first();
        this.ConfirmPassword= page.locator('input[type="password"]').nth(1);
        this.Save = page.getByRole('button', { name: 'Save' });
        this.Search_System_User = page.locator('//html/body/div/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input');
        this.Search_button = page.getByRole('button', { name: 'Search' });
        this.founda = page.locator('.oxd-table');
    
    }
    //open admin module
    async AdminMenu(): Promise<void> {
        await this.Adminmenu.click();
    }
    // to click add button
    async ClickAddButton() : Promise<void>{
        await this.addButton.click();
    }
    getAddUser(): Locator {
        return this.addUser_heading;
    }
    async getUserrole() : Promise<void>{
        await this.User_role.click();
        await this.User_role_ess.click();
    }
     async getEmployeeName() : Promise<void>{
        await this.Employeename.fill('Radha  Gupta');
        await this.Employeename_Autocomplete.click();
    }
     async getStatus() : Promise<void>{
        await this.Status.click()
        await this.Status_enable.click();
    }
    async getUsername() : Promise<void>{
        await this.Username.fill(`TestUser${Date.now()}`);
    }
    async getPassword() : Promise<void>{
        await this.Password.fill('Password@123');
    }
    async getConfirmPassword() : Promise<void>{
        await this.ConfirmPassword.fill('Password@123');
    }
    async getSaveButton() : Promise<void>{
        await this.Save.click();
    }
    async Searchuser() : Promise<void>{
        await this.Search_System_User.fill('Admin');
    }
     async Searchbutton() : Promise<void>{
        await this.Search_button.click();
    }
    gettable(): Locator {
        return this.founda;
}
}