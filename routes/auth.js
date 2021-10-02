/*
    Rutas de Usuario / Auth
    host + /api/auth
*/

// const express = require('express');
// const router = express.Router;

const { Router } = require('express');
const router = Router();


router.get('/', (req, resp)=> {
    resp.json({
        ok: true
    });
});


// exportar las rutas configuradas
module.exports = router;