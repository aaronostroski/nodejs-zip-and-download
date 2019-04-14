'use strict'

const axios = require('axios')
const Path = require('path')
const fs = require('fs');
const AdmZip = require('adm-zip');
const zip = new AdmZip();

let dirFiles = "./files/";
let dirImage = "./files/image/";
let dirZip = "./files/zip/";

module.exports = class DownloadImage {

    constructor(arrayImage) {
        this.arrayImage = arrayImage;

        this.createFile(this.arrayImage);
    }

createFile(arrayImage){ // Main method to create files

    this.createDir();

    let promises = [];

    arrayImage.forEach((urlString, index) => {
        
        let path = Path.resolve(dirImage, `imagem${index}.png`)
        let createStream = fs.createWriteStream(path);
        
        promises.push(new Promise( async(resolve, reject) => {

            await axios({
                url: urlString,
                method: 'GET',
                responseType: 'stream'
            })
            .then(res => res.data.pipe(createStream))
            .catch(err => console.log(err))

            createStream.on('finish', () => resolve());
            createStream.on('error', () => reject());

        })) // end Promise
               
    }); // end forEach

    Promise.all(promises)
        .then(() => this.compressZip())
        .then(() => this.deleteFiles())
        .catch(err => console.log(err))
 
} // end createFile();

compressZip() { // Method to compress image

    let pathToZip = (`${dirZip}image.zip`);
    
    zip.addLocalFolder(dirImage);
    
    zip.writeZip(pathToZip, error => console.log(error));

}

createDir(){ // Method to create all dir necessary to project if doenst exists

    if(!fs.existsSync(dirFiles)) {

        fs.mkdirSync(dirFiles)
    }

    if(!fs.existsSync(dirImage)) {

        fs.mkdirSync(dirImage)
    }

    if (!fs.existsSync(dirZip)) {

        fs.mkdirSync(dirZip)
    }

}

deleteFiles(){ // Method to delete files of image folder. Is optional and does not impair the flow of code 

    fs.readdir(dirImage, (err, files) => {

        console.log(err);
    
        for(let file of files){
    
            fs.unlinkSync(`${dirImage}${file}`)
        }
    })

}

}