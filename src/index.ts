'use strict'

const express = require('express');
const app = express();
const db = require('./config/anexo_01')
const DownloadFile = require('./controller/DownloadImage');
const routerDownload = require('./routes/download')

new DownloadFile(db.images);

app.use(routerDownload);

const PORT = process.env.PORT || 3000;

app.listen(PORT,  () => console.info(`Servidor foi iniciado na porta: ${PORT}.`));