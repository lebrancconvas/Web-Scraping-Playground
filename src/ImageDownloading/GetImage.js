const puppeteer = require('puppeteer');
const ImageData = require('./ImageData');
const ImageDownloader = require('./ImageDownloader');

const GetImage = async() => {

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const link = ImageData.keyakilogoimage.url;
    const imageSelector = ImageData.keyakilogoimage.imageselector;

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