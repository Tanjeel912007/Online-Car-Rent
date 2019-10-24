var express = require ('express');
var ejs = require ('ejs');
var bodyParser = require ('body-parser');
var expSession = require ('express-session');
var cookieParser = require ('cookie-parser');
var home = require('./controllers/home-controller');
var app = express();

//CONFIGURATION
app.use(bodyParser.urlencoded({extended:true}));
app.use(expSession({secret:'Message',saveUninitialized:true,resave:false}));
app.use(cookieParser());
app.use('/home',home);
app.use('/admin',adminlogin);
app.use('/member',member);

//SERVER STARTUP
app.listen(3000,function(){
    console.log('server started at 3000...')
});