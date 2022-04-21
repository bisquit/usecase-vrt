// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'yarn dev',
    url: 'http://localhost:3000/',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:3000/',
  },
  reporter: process.env.CI ? 'github' : 'list',
};

export default config;
