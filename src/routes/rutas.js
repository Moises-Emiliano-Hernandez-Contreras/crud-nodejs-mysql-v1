
const express = require('express');
const controller = require('../controllers/clientesController')

const rutas=express.Router();

rutas.get('/',controller.listar)
rutas.post('/add',controller.save)
rutas.get('/delete/:id',controller.delete)
rutas.get('/update/:id',controller.update)
rutas.post('/updated/:id',controller.updated)
module.exports = rutas;