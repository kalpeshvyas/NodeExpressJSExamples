var express = require('express');
var router = express.Router();

router.get('/', (req,res)=>{
    console.log("A request for things received at " + Date.now());
    res.send('GET routing')
})

router.post('/', (req, res)=>{
    res.send('POST routing')
})

module.exports = router;