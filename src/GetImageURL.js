const puppeteer = require('puppeteer');

const GetImageURL = async() => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const link = `https://google.com`;
    const imageSelector = `body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img`;

    await page.goto(link);
    const imageURL = await page.$eval(imageSelector, img => img.src);

    await page.close();
    await browser.close();

    return `The Image URL: ${imageURL}`;
}

module.exports = GetImageURL;