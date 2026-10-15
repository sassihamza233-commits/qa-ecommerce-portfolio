
import { test, expect } from '@playwright/test';

test('ajouter un produit au panier', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.getByText('Products', { exact: true })
  ).toBeVisible();

  await page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' })
    .getByRole('button', { name: 'Add to cart' })
    .click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  await page.locator('.shopping_cart_link').click();

  await expect(
    page.getByText('Sauce Labs Backpack', { exact: true })
  ).toBeVisible();
});


test('supprimer un produit du panier', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  const backpack = page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' });

  await backpack.getByRole('button', { name: 'Add to cart' }).click();
  await page.locator('.shopping_cart_link').click();

  await expect(
    page.getByText('Sauce Labs Backpack', { exact: true })
  ).toBeVisible();

  await page.getByRole('button', { name: 'Remove' }).click();

  await expect(
    page.getByText('Sauce Labs Backpack', { exact: true })
  ).toHaveCount(0);

  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});
