const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rol: {
        type: Schema.Types.ObjectId,
        ref: 'Rol',
        default: '6168cb1bbd066a7dde2a51b2',
        required: true
    },
    password: {
        type: String,
        required: true
    },
    idToken: {
        type: String
    }
}, );

module.exports = model('Usuario', UsuarioSchema);

// var schema = new Schema({ name: String }, { collection: 'actor' });