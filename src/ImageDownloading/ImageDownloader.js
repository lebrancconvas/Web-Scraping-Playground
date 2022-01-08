const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');
const URL = require('url').URL;

const ImageDownloader = (url, callback) => {
    const userURL = new URL(url);
    const requestCaller = userURL.protocol === "http:" ? http : https;
    const filename = path.basename(url);
    const filenamesplit = filename.split(".");
    const fileextension = filenamesplit[1];
    let realfileextension;
    let realfilename;

    if (fileextension === "png" || fileextension === "jpg" || fileextension === "jpeg") {
        realfilename = filename;
    } else {
        realfileextension = fileextension.substring(0, 3);
        realfilename = filenamesplit[0] + "." + realfileextension;
    }

    const req = requestCaller.get(url, res => {
        const fileStream = fs.createWriteStream(path.join(__dirname, '..', '..', 'data', 'output', 'img', realfilename));
        res.pipe(fileStream);

        fileStream.on("error", err => {
            console.log("Error Writing on Stream:");
            console.log(err);
        });

        fileStream.on("close", () => {
            callback(filename);
        });

        fileStream.on("finish", () => {
            fileStream.close();
            console.log("SUCCESS!!");
        })
    });

    req.on("error", err => {
        console.log("Error Downloading this file:");
        console.log(err);
    });
}


module.exports = ImageDownloader;