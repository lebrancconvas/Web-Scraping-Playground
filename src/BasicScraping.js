const puppeteer = require('puppeteer');

const BasicScraping = async() => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const link = `https://google.com`;
    const selector = ``;

    await page.goto(link);

    await page.close();
    await browser.close();
}