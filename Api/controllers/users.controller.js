const Users = require('../models/users');
const Services = require('../services');

exports.listUsers = (req, res) =>{
    Users.find((err, users) =>{
        if(!err)
            res.status(200).json({ data: users });
        else
            res.s.status(400).send({ message: 'Error al intentar listar Usuarios: ', err });
    })
}

exports.addUsers = (req, res) =>{
    let newUsers = new Users({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        token: Services.createToken()
    })
    newUsers.save((err) =>{
        if(!err)
            res.status(200).json({ token : Services.createToken() });
        else
            res.status(500).send({ message: 'Error al intentar guardar Usuarios: ' + err });
    })
}