const { response } = require('express');
const Usuario = require('../models/Usuario')

const crearUsuario = async (req, resp = response) => {

    try {
        // const { name, email, password } = req.body;   

        const usuario = new Usuario(req.body);

        await usuario.save();

        resp.status(201).json({
            ok: true,
            msg: 'registro',
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