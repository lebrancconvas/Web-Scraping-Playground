const puppeteer = require('puppeteer');

const GetTVSchedule = async() => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    let tvprogram = [];

    const link = `https://www.workpointtv.com/schedule?day=sat`;

    for (let i = 1; i <= 22; i++) {
        const selector = `.cleverse-all-color-black:nth-child(${i}) > a > .row > .col-md-9 > .de-tab`;

        await page.goto(link);
        const element = await page.waitForSelector(selector);
        const value = await element.evaluate(el => el.textContent);
        tvprogram.push(value);

    }

    return tvprogram;
}


module.exports = GetTVSchedule;