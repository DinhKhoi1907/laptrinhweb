const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// MODELS
const User = require('../models/user');

router.use(function(req, res, next) {
    res.locals.title = 'Đăng nhập'
    next();
});

router.get('/login', function(req, res) {
    res.render('auth/login');
});
router.post('/login', function(req, res) {
    const { email, password } = req.body;
    const found = User.findByEmail(email);
    if (found && bcrypt.compareSync(password, found.password)) {
        req.session.userId = found.id;
        res.redirect('/sum');
    } else {
        res.render('auth/login');
    }

});
router.get('/logout', function(req, res) {
    delete req.session.userId;
    res.redirect('/sum');
})

module.exports = router;