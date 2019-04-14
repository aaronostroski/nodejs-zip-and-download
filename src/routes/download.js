const express = require('express');
const router = express.Router();

router.get('/download', (req,res) => {
    
    res.download('./assents/zip/image.zip')
    res.status = 200;
});

module.exports = router;