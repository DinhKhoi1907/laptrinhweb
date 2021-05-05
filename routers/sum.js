const express = require('express');
const router = express.Router();

// cong 2 so get, post
router.get('/', function(req, res) {
    res.render('sum/form');
});
router.post('/', function(req, res) {
    const num1 = Number(req.body.number1);
    const num2 = Number(req.body.number2);
    const result = num1 + num2;
    // render ra view nao 
    res.render('sum/result', { result, num1, num2 });
});

module.exports = router;