const jwt = require('jwt-simple');
const moment = require('moment');
const Users = require('../models/users');
const config = require('../config');

exports.createToken = () =>{
    const payload = {
        sub: Users._id,
        iat: moment().unix(),
        exp: moment().add(1, 'y').unix()
    }
    return jwt.encode(payload, config.TOKEN_SECRET);
}

exports.decodeToken = (token) =>{
    const decode = new Promise((resolve, reject) =>{
        try {
            const payload = jwt.decode(token, config.TOKEN_SECRET);
            
            if(payload.exp <= moment().unix()){
                reject({
                    status: 401, 
                    message: 'Sin autorización token expirado'
                })
            }
            resolve(payload.sub)
        }catch (err){
            reject({
                status: 500,
                message: 'Token inválido'
            })
        }
    })
    return decode;
} 