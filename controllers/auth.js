const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, resp = response)=> {

    // console.log(req.body);
    const { name, email, password } = req.body;

    // manejo de errores
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return resp.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    console.log(errors);

    resp.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    });
}

const loginUsuario = (req, resp = response)=> {

    const { email, password } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return resp.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    resp.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    });
}

const revalidarToken = (req, resp = response)=> {
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