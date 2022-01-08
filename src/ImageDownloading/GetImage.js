const puppeteer = require('puppeteer');
const ImageDownloader = require('./ImageDownloader');

const ImageData = {
    googleimage: {
        url: "https://google.com",
        imageselector: "body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img"
    },
    keyakilogoimage: {
        url: "http://stage48.net/wiki/index.php/Keyakizaka46",
        imageselector: "#mw-content-text > div > table.toccolours.itwiki_template_toc > tbody > tr:nth-child(3) > td > a > img"
    }
};

const GetImage = async() => {

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const link = await ImageData.keyakilogoimage.url;
    const imageSelector = await ImageData.keyakilogoimage.imageselector;

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