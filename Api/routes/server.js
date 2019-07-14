const express = require('express');
const apiRoutes = express.Router();
const Cars = require('../controllers/cars.controller');
const Users = require('../controllers/users.controller');

//Cars
apiRoutes.route('/cars/list').get(Cars.listCars);
apiRoutes.route('/cars/add').post(Cars.addCars);

//Users
apiRoutes.route('/users/list').get(Users.listUsers);
apiRoutes.route('/users/add').post(Users.addUsers);

module.exports = apiRoutes;