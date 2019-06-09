const express=require('express');
const ejs=require('ejs');
const mongoose=require('mongoose');
const cookie=require('cookie-session');
const app=express();
const passport=require('passport');
const passportSetup=require('./config/passport-setup');
mongoose.connect('mongodb+srv://mostafa:mostafa123@rest-api-g03hx.mongodb.net/test?retryWrites=true&w=majority',()=>{
    console.log('DB is connected');
    
});
app.use(cookie({
    maxAge:24*60*60*100,
    keys:['jvijivd']
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs');
// app.get('/',(req,res)=>{
// res.render('login');
// })
 app.use('/',require('./routes/login-route'));

app.listen(300,()=>{
    console.log('listenning to port 3000');
    
});