import { test, expect } from '@playwright/test';
test.use({ viewport: { width: 1800, height: 1000 } });
test(`Load URL and click on parent frame`, async ({ page }) => {
    await page.goto(`https://selectorshub.com/shadow-dom-in-iframe/`);
    await page.waitForSelector(`div[class='elementor-widget-container'] h3`, {
        state: 'visible'
    });

    await page.frameLocator('#pact').locator('#snacktime').getByPlaceholder("Do you love tea").fill('Yes I love tea');
    await page.waitForTimeout(3000);



    await page.close();





})
