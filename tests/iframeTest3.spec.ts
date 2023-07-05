import { test, expect } from '@playwright/test';
test.use({ viewport: { width: 1800, height: 1000 } });
test(`Load URL and click on parent frame`, async ({page})=>{
    await page.goto(`https://selectorshub.com/iframe-scenario/`);
    await page.waitForSelector(`div.elementor-widget-wrap.elementor-element-populated`,{
        state: 'visible'
    });

    await page.frameLocator('#pact1').locator('#inp_val').fill(`Kancha cheena`);
    await page.waitForTimeout(3000);
    


    await page.frameLocator('#pact1').frameLocator('#pact2').locator('#jex').fill(`kancha cheena ka bhai`);
    await page.waitForTimeout(3000);


    await page.frameLocator('#pact1').frameLocator('#pact2').frameLocator('#pact3').locator('#glaf').fill(`kancha cheena ki behen`);
    await page.waitForTimeout(3000);
    await page.close();

   

})
