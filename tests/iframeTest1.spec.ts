import { test, expect } from '@playwright/test';
test.use({ viewport: { width: 1800, height: 1000 } });
test(`Load URL and click on parent frame`, async ({page})=>{
    await page.goto(`https://www.dezlearn.com/nested-iframes-example/`);
    await page.waitForSelector(`div.elementor-widget-container`,{
        state: 'visible'
    });

    // click on the parent iframe button
    const iframelocator = page.frameLocator('#parent_iframe');
    await iframelocator.getByRole('button').click();

    
    await page.frameLocator('#parent_iframe').getByRole('button').click();
    
    
    let text = await page.frameLocator('#parent_iframe').getByRole('paragraph').innerText();
    await console.log(text);

    await expect(page.frameLocator('#parent_iframe').getByRole('paragraph')).toHaveText('Hooray..! You clicked the button from iframe 1',{useInnerText: true});


   


    await page.close();
})
