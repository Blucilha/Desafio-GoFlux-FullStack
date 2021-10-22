const express = require('express');
const controllerShipper = require('./controllerShipper');
const controllerTransporter = require('./controllerTransporter');
const controllerOffer = require('./controllerOffer');
const controllerThrow = require('./controllerThrow');

const routerShipper = express.Router();
routerShipper.get('/shipper', controllerShipper.getAll);
routerShipper.post('/register-shipper', controllerShipper.addOne);
routerShipper.put('/update-shipper/:id', controllerShipper.updateOne);

const routerTransporter = express.Router();
routerTransporter.get('/transporter', controllerTransporter.getAll);
routerTransporter.post('/register-transporter', controllerTransporter.addOne);
routerTransporter.put('/update-transporter/:id', controllerTransporter.updateOne);

const routeOffer = express.Router();
routeOffer.get('/offer', controllerOffer.getAll);
routeOffer.get('/offer/:id', controllerOffer.getAllById);
routeOffer.post('/register-offer/:id', controllerOffer.addOne);

const routerThrow = express.Router();
routerThrow.get('/throw', controllerThrow.getAll);
routerThrow.get('/throw/:id', controllerThrow.getAllById);
routerThrow.post('/register-throw/:id', controllerThrow.addOne);

module.exports = {
    routerShipper,
    routerTransporter,
    routeOffer,
    routerThrow,
};
