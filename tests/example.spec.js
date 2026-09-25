import { test, expect } from '@playwright/test';
import 'dotenv/config';
test('test', async ({ page }) => {
  await page.goto('https://automationplayground.com/crm/');
  await expect(page).toHaveTitle(/Customer Service/);
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill(process.env.CRM_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.CRM_PASSWORD);
  await page.getByRole('button', {name: 'Submit'}).click();
  console.log(process.env.CRM_USERNAME);
});