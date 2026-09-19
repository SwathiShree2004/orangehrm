
import { LoginData } from '../test-data/logindata';
import { test, expect } from '../fixtures/base-fixture'
import { AdminPage } from '../pages/adminmodule';

test.describe("Orange HRM demo automation testing", () => {
    test.beforeEach(async ({ loginPage }) => {
        // Custom fixter
        const username =LoginData.username;
        const password = LoginData.password;
        // Open OrangeHRM login page
        await loginPage.open();
        // Login to OrangeHRM
        await loginPage.login(username, password);
        //dashboard displayed
    })
    test('Open Admin Module and press add button', async ({ page }) => {
        //PIM
        const adminadd = new AdminPage(page);
        await adminadd.AdminMenu();
      
        await expect(page).toHaveURL(/admin/);

        //const addButton1 = new AdminPage(page);
        await adminadd.ClickAddButton();
        const adminHeading = adminadd.getAddUser()
        await expect(adminHeading).toBeVisible();
    });

    test('Fill the employee details', async ({ page }) => {
        // data input
        const datafill = new AdminPage(page);
        await datafill.AdminMenu();
        await datafill.ClickAddButton();
        const adminHeading = datafill.getAddUser()
        await expect(adminHeading).toBeVisible();
        await datafill.getUserrole();
        await datafill.getEmployeeName();
        await datafill.getStatus();
        await datafill.getUsername();
        await datafill.getPassword();
        await datafill.getConfirmPassword();
        await datafill.getSaveButton();
    });
    test('search the details ', async ({ page }) => {
        const searchdata = new AdminPage(page);
        await searchdata.AdminMenu();
        await expect(page).toHaveURL(/admin/);
        await searchdata.Searchuser();
        await searchdata.Searchbutton();
        const adminHeading = searchdata.gettable()
        await expect(adminHeading).toBeVisible();
    
    
    });
}); 
