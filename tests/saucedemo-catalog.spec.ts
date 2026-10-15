import { test, expect } from '@playwright/test';

test('afficher le catalogue des produits', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory\.html/);

  await expect(
    page.getByText('Products', { exact: true })
  ).toBeVisible();

  await expect(
    page.locator('.inventory_item')
  ).toHaveCount(6);
});
