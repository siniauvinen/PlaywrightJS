import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://automationplayground.com/crm/');
  await expect(page).toHaveTitle(/Customer Service/);
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill(process.env.SF_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.SF_PASSWORD);
  await page.getByRole('button', {name: 'Submit'}).click();
  console.log(process.env.SF_USERNAME);
});