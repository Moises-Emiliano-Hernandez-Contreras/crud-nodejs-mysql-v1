const pat = require('path')
const express = require("express")
var body_parser = require('body-parser');
const morgan = require('morgan')
const mysql= require('mysql')
const myconecction = require('express-myconnection')

const rutas=require('./routes/rutas')

const app = express()

app.set('views',pat.join(__dirname,"views"))
app.set("view engine","ejs")

app.use(morgan('dev'))
app.use(myconecction(mysql,{
      host:'localhost',
      user:'root',
      password:'',
      port:3306,
      database:'tienda',
},'single'))
app.use(express.static(pat.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true})); 
app.use(body_parser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use('/',rutas);


app.listen(process.env.PORT || 3000)