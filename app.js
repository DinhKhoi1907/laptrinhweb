const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cookieSession = require('cookie-session');
// const bodyParser = require('body-parser')
const userRouter = require('./routers/user');
const sumRouter = require('./routers/sum');
const authRouter = require('./routers/auth');
const authMiddleware = require('./middlewares/auth')

const app = express();

//session 
app.use(cookieSession({
    name: 'session',
    keys: ['process.env.COOKIE_KEY' || 'secret'],
    maxAge: 24 * 60 * 60 * 1000 //24h
}))
app.use(authMiddleware);
// post data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static
app.use(express.static('public'));
// layouts
app.use(expressLayouts);


app.use('/user', userRouter);
app.use('/sum', sumRouter);
app.use('/auth', authRouter);

// Use EJS
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.locals.title = 'Trang chủ';
    res.render('index');;
});
app.get('/view', function(req, res) {
    req.session.views = (req.session.views || 0) + 1
    res.send(req.session.views + ' views')
});


const port = process.env.port || 3000;
console.log(`server is running on port ${port}`);
app.listen(port);