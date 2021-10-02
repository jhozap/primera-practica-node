// llamamos el paquete de express
const express = require('express');

/** Crear Servidor Express */
const app = express();

/**Rutas */
// app.get('/', (req, resp)=> {
//     resp.json({
//         ok: true
//     });
// })



/** Escuchar las peticiones */

app.listen(4000, () => {
    console.log(`Servidor corriendo en el puerto 4000`)
})