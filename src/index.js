let db = require('./config/anexo_01')
let express = require('express');
let request = require('request');
let fs = require('fs');
let app = express();

   new Promise ((reject, resolve)=>{

        request("https://devmissionbr.s3.us-west-2.amazonaws.com/photos/d00ec210-9fe7-11e8-bc3b-4d2cc244f57b/original/529f6fa0-9fce-11e8-bc3b-4d2cc244f57b1534269004323.png", (err, response, body)=>{

        if(err){
            reject(`Ocorreu um erro no download do arquivo ${err}`)
        }
        
        resolve(response)
        
        })

    })
    .then( res => )
    .catch((err)=>{
        console.log(err);
    });


/* request("https://devmissionbr.s3.us-west-2.amazonaws.com/photos/d00ec210-9fe7-11e8-bc3b-4d2cc244f57b/original/529f6fa0-9fce-11e8-bc3b-4d2cc244f57b1534269004323.png",
     (err, response, body)=>{
     }).pipe(fs.writeFile("out.png", ));


*/
const PORT = process.env.PORT || 3000;


app.listen(PORT,  ()=>{
    console.info(`Servidor foi iniciado na porta: ${PORT}.`);
});