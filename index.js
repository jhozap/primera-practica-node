// llamamos el paquete de express
const express = require('express');
// añadimos la configuracion de la variable de entorno
require('dotenv').config();
const { dbConnection } = require('./database/config');

/** Crear Servidor Express */
const app = express();

/** Base de datos */
dbConnection();


/**Directorio publico */
/** el use es un middleware: funcion que se ejecuta siempre que  alguien hace una peticion a mi servidor*/
app.use(express.static('public'));

// Lectura y parseo del body
app.use( express.json() );

/**Rutas */
app.use('/api/auth', require('./routes/auth'));



/** Escuchar las peticiones */

app.listen(process.env.Port, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.Port }`)
})