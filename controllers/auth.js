const { response } = require('express');

const crearUsuario = (req, resp = response)=> {
    
    const { name, email, password } = req.body;   

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