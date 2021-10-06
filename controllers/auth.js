const { response } = require('express');
const Usuario = require('../models/Usuario')

const crearUsuario = async (req, resp = response) => {
    
    const { email, password } = req.body;  

    try {

        let usuario = await Usuario.findOne({ email});        

        if(usuario) {
            return resp.status(400).json({
                ok: false,
                msg: 'ya existe un usuario registrado con este email'
            });
        }
        
        usuario = new Usuario(req.body);

        await usuario.save();

        resp.status(201).json({
            ok: true,
            msg: 'Usuario creado de manera exitosa',
            uid: usuario.id,
            name: usuario.name
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al guardar el registro',
        });

    }
}

const loginUsuario = (req, resp = response) => {

    const { email, password } = req.body;
    resp.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    });
}

const revalidarToken = (req, resp = response) => {
    resp.json({
        ok: true,
        msg: 'renew'
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};