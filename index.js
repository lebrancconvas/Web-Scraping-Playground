const puppeteer = require('puppeteer');

const GetImage = require('./src/ImageDownloading/GetImage');
const GetTVSchedule = require('./src/TVSchedule/GetTVSchedule');
const YoutubeScroll = require('./src/YoutubePlaylistScrollDown/YoutubeScroll');

const getImage = async() => {
    try {
        const result = await GetImage();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

const getTVSchedule = async() => {
    try {
        const result = await GetTVSchedule();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

const youtubeScroll = async() => {
    try {
        await YoutubeScroll();
    } catch (err) {
        console.log(err);
    }
}

youtubeScroll();