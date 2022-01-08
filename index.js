const puppeteer = require('puppeteer');
const GetImageURL = require('./src/GetImageURL');

const main = async() => {
    try {
        const result = await GetImageURL();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}


main();