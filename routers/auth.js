const express = require('express');
const router = express.Router();

router.get('/login', function(req, res) {
    res.locals.title = 'LOGIN';
    res.render('auth/login');
});
router.post('/login', function(req, res) {


});

module.exports = router;