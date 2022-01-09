const puppeteer = require('puppeteer');

const GetTVSchedule = async() => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    let tvprogram = [];

    const link = `https://www.ch7.com/schedule.html`;
    const selector = `#tab0`;

    await page.goto(link);
    const element = await page.waitForSelector(selector);
    const value = await element.evaluate(el => el.textContent);
    const protoarray = value.replace(/\s+/g, ' ').split('น. ');


    // for (let i = 1; i <= 22; i++) {

    //     await page.goto(link);
    //     const element = await page.waitForSelector(selector);
    //     const value = await element.evaluate(el => el.textContent);

    //     tvprogram.push(value);
    // }

    return protoarray;
}


module.exports = GetTVSchedule;