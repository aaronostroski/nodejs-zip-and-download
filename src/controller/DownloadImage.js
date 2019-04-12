const axios = require('axios')
const Path = require('path')
const fs = require('fs');
const AdmZip = require('adm-zip');
const zip = new AdmZip();

module.exports = class DownloadImage{

    constructor(arrayImage){
        this.arrayImage = arrayImage;

        this.createFile(this.arrayImage);
    }

createFile(arrayImage){ // método para criar o arquivo

    let count = 1;  
    
    arrayImage.forEach((urlString) =>{
        
        let path = Path.resolve('./assents/image', `imagem${count}.png`)
        let createStream = fs.createWriteStream(path);

        count++;
  
            axios({
                url: urlString,
                method: 'GET',
                responseType: 'stream'
            })
            .then(res => res.data.pipe(createStream))
            .catch((err)=>{
                console.log(err);
            })

            new Promise((resolve, reject) => {
                createStream.on('finish', ()=>{
                    resolve()
                })
                createStream.on('error', ()=>{
                    reject()
                })
            }).catch((err)=>{
                console.log(err);
            })

    })

    setTimeout(()=>{

        this.compressZip()

    },10000)
 
} // fim do método createFile

compressZip(){ // método para compactar o arquivo

    let pathToZip = './assents/zip/image.zip';
    
    zip.addLocalFolder('./assents/image');
    
    zip.writeZip(pathToZip, (error)=>{
    
        console.log(error)
    });

}


}