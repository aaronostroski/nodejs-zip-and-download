'use strict'
// JSON Module
let db = require('./config/anexo_01')

//Class Module
let DownloadFile = require('./controller/DownloadImage');

// Router Module
let routerDownload = require('./routes/download')
// NodeJS Module
let express = require('express');
let app = express();

let download = new DownloadFile(db.images);

app.use(routerDownload);

const PORT = process.env.PORT || 3000;

app.listen(PORT,  ()=>{
    console.info(`Servidor foi iniciado na porta: ${PORT}.`);
});