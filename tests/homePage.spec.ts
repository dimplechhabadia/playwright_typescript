import {expect, test} from '@playwright/test'

test('HomePage',async ({ page })=>{

    await page.goto('https://the-internet.herokuapp.com');
    await expect(page).toHaveTitle('The Internet');
})
