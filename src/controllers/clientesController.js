const controller={}
const Swal = require('sweetalert2')
controller.listar=(req,res)=>{      
      req.getConnection((err,conn)=>{
            if(err){
                  res.json(err)
            }else{
                  conn.query("SELECT * FROM sucursales",(err,sucursales)=>{
                        if(err){
                              res.json(err)
                        }else{                              
                              res.render('sucursales',{
                                    data:sucursales
                              })

                        }
                  })
            }
      })
}
controller.save=(req,res)=>{      
      const {sucursal,direcc,empleados}=req.body
      const nempleados=parseInt(empleados)       
      console.log(req.body)     
      req.getConnection((err,conn)=>{
            if(err){
                  res.json(err)
            }else{                  
                  conn.query("INSERT INTO sucursales VALUES(null,?,?,?)",[sucursal,direcc,nempleados],(err,sucursal)=>{                        
                        if(err){
                              res.json(err)
                        }else{
                              res.redirect('/')
                        }
                  })
            }
      })
}
controller.update=(req,res)=>{      
      req.getConnection((err,conn)=>{
            if(err){
                  res.json(err)
            }else{
                  conn.query("SELECT * FROM sucursales WHERE id=?",[req.params.id],(err,cliente)=>{
                        if(err){
                              res.json(err)
                        }else{
                              res.render('update',{
                                    datos:cliente[0]                                    
                              })
                        }
                  })
            }
      })
}
controller.updated=(req,res)=>{
      const {sucursal,direcc,empleados}=req.body
      const nempleados=parseInt(empleados) 
      const id=parseInt(req.params.id)              
      req.getConnection((err,conn)=>{
            if(err){
                  res.json(err)
            }else{
                  conn.query('UPDATE sucursales set nombre=?,direccion=?,empleados=? WHERE id = ?',
                  [sucursal,direcc,nempleados,id],
                  (err,cliente)=>{
                        if(err){
                              res.json(err)
                        }else{
                              res.redirect('/')
                        }
                  })
            }
      })
}
controller.delete=(req,res)=>{
      req.getConnection((err,conn)=>{
            if(err){
                  res.json(err)
            }else{
                  conn.query("DELETE FROM sucursales WHERE id = ?",[req.params.id],(err,inv)=>{
                        if(err){
                              res.json(err)
                        }else{
                              res.redirect('/')
                              console.log(inv)
                        }                        
                  })
            }
      })
}
controller.listarEmp=(req,res)=>{
      req.getConnection((err,conn)=>{
            if(err){
                  res.json(err)
            }else{
                  conn.query("SELECT empleado.id_emp,empleado.nombre as empleado,empleado.sueldo,empleado.tipo,sucursales.nombre,sucursales.id from empleado inner join sucursales ON sucursales.id=empleado.suc_asignado;",(err,empleados)=>{
                        if(err){
                              res.json(err)
                        }else{      
                              console.log(empleados)                      
                              res.render('empleados',{  
                                    data:empleados
                              })

                        }
                  })
            }
      })
}
controller.saveEmp=(req,res)=>{
      const {nombre,sueldo,tipo,suc}=req.body
      const nSueldo=parseFloat(sueldo)       
      const nsuc=parseInt(suc)
      console.log(req.body)          
      req.getConnection((err,conn)=>{
            if(err){
                  res.json(err)
            }else{                  
                  conn.query("INSERT INTO empleado VALUES(null,?,?,?,?)",[nombre,nSueldo,tipo,nsuc],(err,sucursal)=>{                        
                        if(err){
                              res.json(err)
                        }else{
                              res.redirect('/empleados')
                              
                        }
                  })
            }
      })
}
controller.deleteEmpleado=(req,res)=>{
      req.getConnection((err,conn)=>{
            if(err){
                  res.json(err)
            }else{
                  conn.query("DELETE FROM empleado WHERE id_emp = ?",[req.params.id],(err,inv)=>{
                        if(err){
                              res.json(err)
                        }else{
                              res.redirect('/empleados')                              
                        }                        
                  })
            }
      })
}
controller.updateEmpleado=(req,res)=>{      
      req.getConnection((err,conn)=>{
            if(err){
                  res.json(err)
            }else{
                  conn.query("SELECT * FROM empleado WHERE id_emp=?",[req.params.id],(err,cliente)=>{
                        if(err){
                              res.json(err)
                        }else{
                              res.render('updateEmpleado',{
                                    datos:cliente[0]                                    
                              })
                        }
                  })
            }
      })
}
controller.updatedEmpleado=(req,res)=>{
      const {nombre,tipo,sueldo,suc}=req.body
      const sucursal=parseInt(suc)
      const suel=parseFloat(sueldo)
      const id=parseInt(req.params.id)              
      req.getConnection((err,conn)=>{
            if(err){
                  res.json(err)
            }else{
                  conn.query('UPDATE empleado set nombre=?,tipo=?,sueldo=?,suc_asignado=? WHERE id_emp = ?',
                  [nombre,tipo,suel,sucursal,id],
                  (err,cliente)=>{
                        if(err){
                              console.log(req.body)
                              res.json(err)
                        }else{
                              res.redirect('/empleados')
                        }
                  })
            }
      })
}
module.exports=controller