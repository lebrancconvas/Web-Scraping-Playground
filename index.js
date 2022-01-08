const puppeteer = require('puppeteer');
const GetImage = require('./src/ImageDownloading/GetImage');

const main = async() => {
    try {
        const result = await GetImage();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}


main();