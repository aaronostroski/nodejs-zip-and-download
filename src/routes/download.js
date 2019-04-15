const express = require('express');
const router = express.Router();
const fs = require('fs')

router.get('/download', (req,res) => {

    if(fs.existsSync('src/files/zip/image.zip')){

        res.status(200);
        res.setHeader("Content-Type", "application/zip");
        res.download('src/files/zip/image.zip');

    } else {

        res.status(404).send("No momento não possuimos o arquivo para download, aguarde alguns segundos.");

    }
 
});

module.exports = router;