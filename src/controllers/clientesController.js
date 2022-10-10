const controller={}

controller.listar=(req,res)=>{
      req.getConnection((err,conn)=>{
            if(err){
                  res.json(err)
            }else{
                  conn.query("SELECT * FROM clientes",(err,clientes)=>{
                        if(err){
                              res.json(err)
                        }else{                              
                              res.render('clientes',{
                                    data:clientes
                              })
                        }
                  })
            }
      })
}
controller.save=(req,res)=>{
      const data=req.body
      req.getConnection((err,conn)=>{
            if(err){
                  res.json(err)
            }else{
                  conn.query("INSERT INTO clientes set ?",[data],(err,clientes)=>{
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
                  conn.query("SELECT * FROM clientes WHERE id=?",[req.params.id],(err,cliente)=>{
                        if(err){
                              res.json(err)
                        }else{
                              res.render('update',{
                                    data:cliente[0]
                              })
                        }
                  })
            }
      })
}
controller.updated=(req,res)=>{
      req.getConnection((err,conn)=>{
            if(err){
                  res.json(err)
            }else{
                  conn.query('UPDATE clientes set ? WHERE id = ?',[req.body,req.params.id],
                  (err,cliente)=>{
                        if(err){
                              res.json(err)
                        }else{
                              res.redirect('/')
                              console.log(cliente) 
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
                  conn.query("DELETE FROM clientes WHERE id = ?",[req.params.id],(err,clientes)=>{
                        if(err){
                              res.json(err)
                        }else{
                              res.redirect('/')
                              console.log(clientes)
                        }                        
                  })
            }
      })
}
module.exports=controller