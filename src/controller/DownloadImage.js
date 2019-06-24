'use strict'

const ErrorHandler = require('./ErrorHandler')
const axios = require('axios')
const Path = require('path')
const fs = require('fs');
const AdmZip = require('adm-zip');
const zip = new AdmZip();

const dirFiles = "src/files/";
const dirImage = "src/files/image/";
const dirZip = "src/files/zip/";


module.exports = class DownloadImage {

    constructor(arrayImage) {

        this.arrayImage = arrayImage;

        this.createFile(this.arrayImage);

    }

createFile(arrayImage) { // Main method to create files

    this.createDir();

    let promises = [];

    arrayImage.forEach((url, index) => {
        
        let path = Path.resolve(dirImage, `imagem${index}.png`)
        let createStream = fs.createWriteStream(path);
        
        promises.push( new Promise( async(resolve, reject) => {

            await axios({
                url: url,
                method: 'GET',
                responseType: 'stream'
            })
            .then(res => res.data.pipe(createStream))
            .catch(error => resolve(ErrorHandler.handleError(error, url)));

            createStream.on('finish', () => resolve());
            createStream.on('error', () => reject());

        })) // end Promise
               
    }); // end forEach

    Promise.all(promises)
        .then(() => this.compressZip())
        .then(() => this.deleteFiles())
        .catch(error => console.log(error));
 
} // end createFile();

compressZip() { // Method to compress image

    let pathToZip = (`${dirZip}image.zip`);

    try {

        zip.addLocalFolder(dirImage);

    } catch (error) {

        console.log(error);

    }  finally {

        zip.writeZip(pathToZip, error => {

            if(error) return console.log(err);
    
            console.log(`Zip criado na pasta: "${pathToZip}"`)
    
        });

    }    

}

createDir() { // Method to create all dir necessary to project if doenst exists

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

deleteFiles() { // Method to delete files of image folder. Is optional and does not impair the flow of code 

    fs.readdir(dirImage, (error, files) => {

        if(error) return console.log(error);
    
        for(let file of files){
    
            fs.unlinkSync(`${dirImage}${file}`)
        }

        console.log(`Arquivos da pasta: "${dirImage}" foram deletados`);

    })

}

}