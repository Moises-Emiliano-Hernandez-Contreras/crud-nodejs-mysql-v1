
const express = require('express');
const controller = require('../controllers/clientesController')

const rutas=express.Router();

rutas.get('/',controller.listar)

rutas.post('/add',controller.save)
rutas.get('/delete/:id',controller.delete)
rutas.get('/update/:id',controller.update)
rutas.post('/updated/:id',controller.updated)

rutas.get('/empleados',controller.listarEmp)
rutas.post('/addEmpleados',controller.saveEmp)
rutas.get('/deleteEmpleado/:id',controller.deleteEmpleado)
rutas.get('/updateEmpleado/:id',controller.updateEmpleado)
rutas.post('/updatedEmpleado/:id',controller.updatedEmpleado)
module.exports = rutas;