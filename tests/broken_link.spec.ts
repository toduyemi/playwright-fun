// @ts-check
import { test, expect } from 'playwright/test';

test.describe('Verify Links on Awesome Playwright with an http request', () => {
    test('Link 1: chrome-aws-lambda extension', async ({ page, request }) => {
        await page.goto('/awesome-playwright');

        const linkOneUrl: string = <string>await page.getByRole('link', { name: 'chrome-aws-lambda' }).getAttribute('href');

        const response = await request.get(linkOneUrl);



        expect(response.status()).toBe(200);
    });

    test('Link 2: artillery-engine-playwright', async ({ page, request }) => {
        await page.goto('/awesome-playwright');

        const linkTwoUrl: string = await page.getByRole('link', { name: 'artillery-engine-playwright' }).getAttribute('href') as string;

        const response = await request.get(linkTwoUrl);



        expect(response.status()).toBe(200);
    });

    test('Link 3: Rayrun Ask PLaywright', async ({ page, request }) => {
        await page.goto('/awesome-playwright');


        const linkThreeUrl: string = <string>await page.getByRole('link', { name: 'Ask Playwright' }).getAttribute('href');

        const response = await request.get(linkThreeUrl);



        expect(response).toBeOK;
    });

    test('Link 4: Currents Dev Dashboard', async ({ page, request }) => {
        await page.goto('/awesome-playwright');

        const linkFourUrl: string = await page.getByRole('link', { name: 'currents-dev' }).getAttribute('href') as string;

        const response = await request.get(linkFourUrl);



        expect(response.status()).toBe(200);
    });
})


test.describe('Verify Links on Awesome Playwright by verifying URL', () => {
    test('Link 1: chrome-aws-lambda extension', async ({ page }) => {
        await page.goto('/awesome-playwright');

        await page.getByRole('link', { name: 'chrome-aws-lambda' }).click();



        await expect(page).toHaveURL('https://github.com/alixaxel/chrome-aws-lambda#usage-with-playwright');
    });

    test('Link 2: artillery-engine-playwright', async ({ page }) => {
        await page.goto('/awesome-playwright');
        await page.getByRole('link', { name: 'artillery-engine-playwright' }).click();


        await expect(page).toHaveURL('https://github.com/artilleryio/artillery-engine-playwright');
    });

    test('Link 3: Rayrun Ask PLaywright', async ({ page }) => {
        await page.goto('/awesome-playwright');

        await page.getByRole('link', { name: 'Ask Playwright' }).click();



        await expect(page).toHaveURL('https://ray.run/ask');
    });

    test('Link 4: Currents Dev Dashboard', async ({ page }) => {
        await page.goto('/awesome-playwright');
        await page.getByRole('link', { name: 'currents-dev' }).click();


        await expect(page).toHaveURL('https://currents.dev');
    });
})