import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});
