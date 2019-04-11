let db = require('./config/anexo_01')
const express = require('express');
let Path = require('path')
let fs = require('fs');
let axios = require('axios')
const app = express();

function image(){

    db.images.forEach((img) =>{

        let path = Path.resolve(__dirname, 'image', `imagem${Math.floor(Math.random() * (1000 - 1))}.png`)
        let writer = fs.createWriteStream(path)
  
            axios({
                url: img,
                method: 'GET',
                responseType: 'stream'
            })
            .then(res => res.data.pipe(writer))
            .catch((err)=>{
                console.log(err);
            })

            return new Promise((resolve, reject) => {
                writer.on('finish', resolve)
                writer.on('error', reject)
            })

    })
          
}

image();


const PORT = process.env.PORT || 3000;

app.listen(PORT,  ()=>{
    console.info(`Servidor foi iniciado na porta: ${PORT}.`);
});