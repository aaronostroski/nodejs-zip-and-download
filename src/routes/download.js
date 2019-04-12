let express = require('express');
let router = express.Router();

router.get('/download', (req,res)=>{

    res.download('./assents/zip/image.zip')
    
});

module.exports= router;