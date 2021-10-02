// llamamos el paquete de express
const express = require('express');
// añadimos la configuracion de la variable de entorno
require('dotenv').config();

console.log(process.env);

/** Crear Servidor Express */
const app = express();

/**Directorio publico */
/** el use es un middleware: funcion que se ejecuta siempre que  alguien hace una peticion a mi servidor*/
app.use(express.static('public'));

/**Rutas */
// app.get('/', (req, resp)=> {
//     resp.json({
//         ok: true
//     });
// })



/** Escuchar las peticiones */

app.listen(process.env.Port, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.Port }`)
})