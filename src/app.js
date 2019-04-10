let db = require('./config/anexo_01')
let express = require('express');
let app = express();

db.images.forEach((e)=>{

    console.log(e);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,  ()=>{
    console.info(`Servidor foi iniciado na porta: ${PORT}.`);
});