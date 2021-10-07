const { response } = require('express');


/**getProductos */

const getProductos = (req, resp = response) => {
    resp.status(200).json({
        ok: true,
        msg: 'Listar Productos',
    });
}

/**crearProducto */

const crearProducto = (req, resp = response) => {
    resp.status(200).json({
        ok: true,
        msg: 'Crear Productos',
    });
}

/**actualizarProducto */

const actualizarProducto = (req, resp = response) => {
    resp.status(200).json({
        ok: true,
        msg: 'Actualizar Productos',
    });
}

/**eliminarProducto */

const eliminarProducto = (req, resp = response) => {
    resp.status(200).json({
        ok: true,
        msg: 'Eliminar Productos',
    });
}

module.exports = {
    getProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};