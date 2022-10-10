const pat = require('path')
const express = require("express")
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
      password:'user',
      port:3306,
      database:'nodejs',
},'single'))
app.use(express.urlencoded({extended:false}));

app.use('/',rutas);

app.use(express.static(pat.join(__dirname,'public')))

app.listen(process.env.PORT || 3000)