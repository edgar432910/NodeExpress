const {response, request} =require('express');

const usuariosGet= (req=request, res=response) =>{

    const query= req.query;

    res.json({
        query,
        msg: 'get mensaje controller'
    })
  }
const usuariosPost = (req, res= response) =>{
    const {nombre,edad} = req.body;

    res.status(403).json({
        msg: 'post mensaje',
        nombre,edad
    })
  }

const usuariosPut= (req, res=response) =>{
    const {id} = req.params;
    res.status(403).json({
        id,
        msg: 'put mensaje'
    })
  }

const usuariosPatch = (req, res=response) =>{
    res.status(403).json({
        
        msg: 'patch mensaje'
    })
  }

const usuariosDelete =(req, res =response) =>{
    res.status(403).json({
        
        msg: 'delete mensaje'
    })
  }


module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}