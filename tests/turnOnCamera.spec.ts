import { test } from '@playwright/test';

test('turn on camera', async ({ page }) => {
  await page.goto('http://admin.yoursite.test:5173/');
  await page.getByRole('button', { name: 'turn camera on' }).click();
  await page.getByRole('button', { name: 'turn camera off' }).click({timeout: 5000});
});