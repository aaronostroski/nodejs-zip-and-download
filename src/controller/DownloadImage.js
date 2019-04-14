const axios = require('axios')
const Path = require('path')
const fs = require('fs');
const AdmZip = require('adm-zip');
const zip = new AdmZip();

module.exports = class DownloadImage {

    constructor(arrayImage) {
        this.arrayImage = arrayImage;

        this.createFile(this.arrayImage);
    }

createFile(arrayImage){ // main method to create Files

    let promises = [];

    arrayImage.forEach( async(urlString, index) => {
        
        let path = Path.resolve('./files/image', `imagem${index}.png`)
        let createStream = fs.createWriteStream(path);
        
        await promises.push(new Promise((resolve, reject) => {

            axios({
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
        .catch(err => console.log(err))
 
} // end createFile();

compressZip() { // method to compress image

    let pathToZip = './files/zip/image.zip';
    
    zip.addLocalFolder('./files/image');
    
    zip.writeZip(pathToZip, (error) => console.log(error));

}

}