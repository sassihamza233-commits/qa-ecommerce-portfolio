import { test, expect } from '@playwright/test';

test('connexion réussie avec standard_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(
    page.getByText('Products', { exact: true })
  ).toBeVisible();
});


test('connexion refusée avec un mot de passe incorrect', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('wrong_password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.locator('[data-test="error"]')
  ).toBeVisible();

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText('Username and password do not match');
});


test('connexion refusée avec les champs vides', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.locator('[data-test="error"]')
  ).toBeVisible();

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText('Username is required');
});



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
