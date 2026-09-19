import { test, expect } from '../fixtures/base-fixture';
import { LoginData } from '../test-data/logindata';

test('Complete OrangeHRM smoke test for the whole application', async ({ page, loginPage }) => {
    await loginPage.open();
    await loginPage.login(LoginData.username, LoginData.password);

    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByRole('heading', { name: 'Dashboard', exact: true })).toBeVisible();

    await page.getByRole('link', { name: 'Admin', exact: true }).click();
    await expect(page).toHaveURL(/admin/);
    await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();

    await page.getByRole('link', { name: 'PIM', exact: true }).click();
    await expect(page).toHaveURL(/pim/);
    await expect(page.getByText('Employee Information', { exact: true })).toBeVisible();

    await page.getByRole('link', { name: 'Dashboard', exact: true }).click();
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByRole('heading', { name: 'Dashboard', exact: true })).toBeVisible();
});
