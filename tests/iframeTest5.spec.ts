import { test, expect } from '@playwright/test';
test.use({ viewport: { width: 1800, height: 1000 } });
test(`Load URL and click on parent frame`, async ({ page }) => {
    await page.goto(`https://the-internet.herokuapp.com/iframe`);
    await page.waitForSelector(`div[role='menubar']`, {
        state: 'visible'
    });

    await page.frameLocator('#mce_0_ifr').locator('#tinymce').clear();
    await page.frameLocator('#mce_0_ifr').locator('#tinymce').fill('What you see is what you get');
    await page.waitForTimeout(3000);





    await page.close();





})
