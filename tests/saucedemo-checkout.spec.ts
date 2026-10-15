
import { test, expect } from '@playwright/test';

test('finaliser une commande', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' })
    .getByRole('button', { name: 'Add to cart' })
    .click();

  await page.locator('.shopping_cart_link').click();
  await page.getByRole('button', { name: 'Checkout' }).click();

  await page.getByPlaceholder('First Name').fill('Hamza');
  await page.getByPlaceholder('Last Name').fill('Sassi');
  await page.getByPlaceholder('Zip/Postal Code').fill('95000');

  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(
    page.getByText('Sauce Labs Backpack', { exact: true })
  ).toBeVisible();

  await page.getByRole('button', { name: 'Finish' }).click();

  await expect(
    page.getByText('Thank you for your order!')
  ).toBeVisible();
});
