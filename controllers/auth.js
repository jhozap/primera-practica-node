const { response } = require('express');
const bcrypt = require('bcryptjs');
const Rol = require('../models/Rol');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, resp = response) => {
    
    const { email, password } = req.body;  

    try {

        let usuario = await Usuario.findOne({ email });        

        if(usuario) {
            return resp.status(400).json({
                ok: false,
                msg: 'ya existe un usuario registrado con este email'
            });
        }
        
        usuario = new Usuario(req.body);

        /**Encriptando contraseña */
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

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

const loginUsuario = async (req, resp = response) => {

    const { email, password } = req.body;

    try {

        /**Confirmar email */
        let usuario = await Usuario.findOne({ email }); 
        
        if(!usuario) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }

        /**Confirmar email */

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if(!validPassword) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }

        /**Generar Token */
        const token = await generarJWT(usuario.id, usuario.name);

        resp.json({
            ok: true,
            msg: 'Ok',
            uid: usuario.id,
            name: usuario.name,
            token
        });
        
    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error al autenticar',
        });
    }    
}

const revalidarToken = async (req, resp = response) => {


    const { uid, name } = req;

    /**Generar Nuevo Token */
    const token = await generarJWT(uid, name);

    resp.json({
        ok: true,
        token: token
    });
}

const validarUsuarioGoogle = async (req, resp = response) => {
    const { uid, name, email } = req;

    try {
        /**Confirmar email */
        let usuario = await Usuario.findOne({ email, idToken: uid })
                                    .populate('rol');

        if(usuario) {

            console.log(usuario);

            if(usuario.rol.name === 'Indefinido') {
                
                resp.status(401).json({
                    ok: false,
                    msg: 'El usuario aun no ha sido autorizado por el administrador'
                });
            } else {
                
                /**Generar Token */
                const token = await generarJWT(usuario.id, usuario.name);

                resp.json({
                    ok: true,
                    msg: 'Ok',
                    uid: usuario.id,
                    name: usuario.name,
                    token
                });
            }            
        } else {
            usuario = new Usuario({name, email, password: uid, idToken: uid});
            
            const newUser = await usuario.save();
            resp.status(201).json({
                ok: true,
                msg: 'Usuario creado de manera exitosa, para poder acceder comuniquese con el administrador',
                uid: usuario.id,
                name: usuario.name
            });
        }
       
    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error al autenticar',
        });
    }
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    validarUsuarioGoogle
};