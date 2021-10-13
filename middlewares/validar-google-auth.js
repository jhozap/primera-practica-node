const { response } = require('express');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const client = new OAuth2Client('407857674330-otcplnqid00dearn7c0kclqn65n2k45a.apps.googleusercontent.com');

const validarGoogleAuth = (req, res = response, next) => {

    /**x-token headers */
    // const token = req.header('x-token');

    /**Bearer token Authorization */
    let token = '';
    token = req.headers['x-access-token'] || req.headers['authorization'];

    // console.log(token);

    if(!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No se ha proporcionado un toke valido'
        });
    }

    if(token.startsWith('Bearer ')) {
        token = token.slice(7, token.lenth);
    }

    
    try {
        console.log('token gogle', token);

        // client.verifyIdToken({token, audience: '407857674330-otcplnqid00dearn7c0kclqn65n2k45a.apps.googleusercontent.com'})
        //         .then((response) => {
        //             const { email_verified, name, email } = response.payload;
        //         });
        
        // const { uid, name } = jwt.verify(
        //     token,
        //     process.env.Secret_JWT
        // );

        // req.uid = uid;
        // req.name = name;
        

        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token invalido'
        });
    }

    next();

}

module.exports = {
    validarGoogleAuth
}