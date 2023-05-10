import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');
  await page.getByRole('heading', { name: 'Vite + React' }).isVisible();
  await page.getByRole('button', { name: 'count is 0' }).click();
  await page.getByRole('button', { name: 'count is 1' }).isVisible();
  
});