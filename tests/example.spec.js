import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://automationplayground.com/crm/');
  await expect(page).toHaveTitle(/Customer Service/);
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('myemail@email.fi');
  await page.getByRole('textbox', { name: 'Password' }).fill('mypassword');
  await page.getByRole('button', {name: 'Submit'}).click();
});