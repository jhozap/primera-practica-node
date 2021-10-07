/*
    Rutas de Usuario / Productos
    host + /api/productos
*/
const { getProductos, crearProducto, actualizarProducto, eliminarProducto } = require('../controllers/productos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { Router } = require('express');
const router = Router();

/**Aplicar validacion de token a todas las rutas por defecto */
router.use(validarJWT);

router.get('/', getProductos);

router.post('/', crearProducto);

router.put('/:id', actualizarProducto);

router.delete('/:id', eliminarProducto);

module.exports = router;