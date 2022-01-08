const puppeteer = require('puppeteer');
const ImageDownloader = require('./ImageDownloader');

const GetImage = async() => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const link = `https://google.com`;
    const imageSelector = `body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img`;

    await page.goto(link);
    const imageURL = await page.$eval(imageSelector, img => img.src);

    ImageDownloader(imageURL, filename => {
        console.log("Downloading Success.");
    })

    await page.close();
    await browser.close();

    // return `The Image URL: ${imageURL}`;
}

module.exports = GetImage;