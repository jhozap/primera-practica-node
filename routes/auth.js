/*
    Rutas de Usuario / Auth
    host + /api/auth
*/

// const express = require('express');
// const router = express.Router;

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const router = Router();


router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ], 
    crearUsuario);

router.post(
    '/', 
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    loginUsuario);

router.get('/renew', revalidarToken);

// router.post('/new', (req, resp)=> {
//     resp.json({
//         ok: true,
//         msg: 'registro'
//     });
// });

// router.post('/', (req, resp)=> {
//     resp.json({
//         ok: true,
//         msg: 'login'
//     });
// });


// router.get('/renew', (req, resp)=> {
//     resp.json({
//         ok: true,
//         msg: 'renew'
//     });
// });



// exportar las rutas configuradas
module.exports = router;