const Cars = require('../models/cars');

exports.listCars = (req, res) => {
    Cars.find((err, cars) =>{
        if(!err)
            res.status(200).json({ data: cars });
        else
            res.status(400).send({ message: 'Error al intentar listar Cars: ', err });
    })
}

exports.addCars = (req, res) =>{
    let newCars = new Cars({
        mark: req.body.mark,
        model: req.body.model,
        age: req.body.age,
        price: req.body.price,
    })
    newCars.save((err) =>{
        if(!err)
            res.status(200).send({ message: 'Cars agregados correctamente' });
        else
            res.status(500).send({ message: 'Error al intentar guardaer Cars: ', err });
    })
}