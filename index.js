// llamamos el paquete de express
const express = require('express');
// añadimos la configuracion de la variable de entorno
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

/** Crear Servidor Express */
const app = express();

/** Base de datos */
dbConnection();

/**Utilizar CORS */
app.use(cors());


/**Directorio publico */
/** el use es un middleware: funcion que se ejecuta siempre que  alguien hace una peticion a mi servidor*/
app.use(express.static('public'));

// Lectura y parseo del body
app.use( express.json() );

/**Rutas */
app.use('/api/auth', require('./routes/auth'));
app.use('/api/productos', require('./routes/productos'));



/** Escuchar las peticiones */

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`)
})