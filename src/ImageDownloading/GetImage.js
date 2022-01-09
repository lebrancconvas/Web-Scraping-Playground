const puppeteer = require('puppeteer');
const ImageData = require('../../data/input/js/ImageData');
const ImageDownloader = require('./ImageDownloader');

const GetImage = async() => {
    // Init Browser and Page via Puppeteer. 
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Declare website link and CSS Selector. 
    const link = ImageData.songhyekyoimage.url;
    const imageSelector = ImageData.songhyekyoimage.imageselector;

    // Go to the website.
    await page.goto(link);

    // Get Image URL from CSS Selector.
    const imageURL = await page.$eval(imageSelector, img => img.src);

    // Implementation Image Downloader Function. 
    ImageDownloader(imageURL, filename => {
        console.log("Downloading Success.");
    })

    // Exit from Page and Browser. 
    await page.close();
    await browser.close();
}

module.exports = GetImage;