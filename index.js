const puppeteer = require('puppeteer');
const GetImage = require('./src/ImageDownloading/GetImage');
const GetTVSchedule = require('./src/TVSchedule/GetTVSchedule');

const main = async() => {
    try {
        const result = await GetTVSchedule();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}


main();