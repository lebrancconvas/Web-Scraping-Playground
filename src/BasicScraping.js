const puppeteer = require('puppeteer');

const BasicScraping = async() => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
}