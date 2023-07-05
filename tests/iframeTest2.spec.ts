import { test, expect } from '@playwright/test';
test.use({ viewport: { width: 1800, height: 1000 } });
test(`Load URL and click on parent frame`, async ({ page }) => {
    await page.goto(`https://www.dezlearn.com/nested-iframes-example/`);
    await page.waitForSelector(`div.elementor-widget-container`, {
        state: 'visible'
    });



    /**
     * Click on the parent frame
     */

    await page.frameLocator('#parent_iframe').getByRole('button').click();

    /**
     * Assert for the text present
     */
    await expect(page.frameLocator('#parent_iframe').getByRole('paragraph')).toHaveText('Hooray..! You clicked the button from iframe 1', { useInnerText: true });

    /**
     * Click on the child frame
     */
    const parentframe = await page.frameLocator('#parent_iframe');
    const childframe = await parentframe.frameLocator('#iframe1')
    await childframe.getByRole('button').click();

    /**
     * Assert text for the child frame
     */

    await expect(childframe.getByRole('paragraph')).toHaveText('Hooray..! You clicked the button from iframe 2');

    await page.waitForTimeout(5000);


    await page.close();
})
