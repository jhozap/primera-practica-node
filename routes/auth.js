/*
    Rutas de Usuario / Auth
    host + /api/auth
*/

// const express = require('express');
// const router = express.Router;

const { Router } = require('express');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')

router.post('/new', crearUsuario);

router.post('/', loginUsuario);

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