'use strict'
// JSON Module
let db = require('./config/anexo_01')

//Class Module
let DownloadFile = require('./class/DownloadImage');

// NodeJS Module
const express = require('express');
const app = express();



let download = new DownloadFile(db.images);


/*
function image(){

    let count = 1;  
    
    db.images.forEach((img) =>{
        
        let path = Path.resolve(__dirname, 'assents/image', `imagem${count}.png`)
        let createStream = fs.createWriteStream(path);

        count++;
  
            axios({
                url: img,
                method: 'GET',
                responseType: 'stream'
            })
            .then(res => res.data.pipe(createStream))
            .catch((err)=>{
                console.log(err);
            })

            return new Promise((resolve, reject) => {
                createStream.on('finish', ()=>{
                    resolve()
                })
                createStream.on('error', ()=>{
                    reject()
                })
            })

    })
 
}

function zip1(){

    let pathToZip = './assents/zip/image.zip';
    
    zip.addLocalFolder('./assents/image');
    
    zip.writeZip(pathToZip, (error)=>{
    
        console.log(error)
    });
    
    
    }
    

image();


*/

/*fs.readdir("./img", (err, files)=>{
    console.log(err);

    for(let file of files){

        fs.unlinkSync(`./img/${file}`)
    }
} ) */
    

const PORT = process.env.PORT || 3000;

app.listen(PORT,  ()=>{
    console.info(`Servidor foi iniciado na porta: ${PORT}.`);
});