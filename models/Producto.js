const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    name: {
        type: String,
        required: true
    },
    bar_code: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    }
}, );

module.exports = model('Producto', ProductoSchema);