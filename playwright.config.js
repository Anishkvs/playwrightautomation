// @ts-check
/*

import { defineConfig, devices } from '@playwright/test';
*/
const {devices} = require('@playwright/test');

const config = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: false
    // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer
  },
};

export default config;
