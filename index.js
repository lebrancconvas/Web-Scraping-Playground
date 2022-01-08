const puppeteer = require('puppeteer');
const GetImage = require('./src/GetImage');

const main = async() => {
    try {
        const result = await GetImage();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}


main();