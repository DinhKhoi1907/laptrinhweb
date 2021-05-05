const express = require('express');
const router = express.Router();


// MODELS
const User = require('../models/user');
const ensureLoggedIn = require('../middlewares/ensure-logged-in');

router.use(ensureLoggedIn);

router.use(function(req, res, next) {
    res.locals.title = 'Cộng 2 số';
    next();
});


// cong 2 so get, post
router.get('/', function(req, res) {
    res.render('sum/form');
});

router.post('/', function(req, res) {
    const num1 = Number(req.body.number1);
    const num2 = Number(req.body.number2);
    const result = num1 + num2;
    const { userId } = req.session;
    // render ra view nao 
    res.render('sum/result', { result, num1, num2 });
});

module.exports = router;