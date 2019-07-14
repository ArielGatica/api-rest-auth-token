const services = require('../services/index');

exports.tokenVerify = (req, res, next) =>{
    if(!req.headers.authorization)
        res.status(403).send({ message: 'Sin autorización, no existe un token válido'});

    const token = req.headers.authorization.split(' ')[1];

    services.decodeToken(token)
        .then((response) =>{
            req.user = response;
            next();
        })
        .catch(() =>{
            res.status(response.status);
        })
}