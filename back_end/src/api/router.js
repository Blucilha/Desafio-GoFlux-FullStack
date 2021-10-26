const express = require('express');
const shipperController = require('../controllers/shipperController');
const transporterController = require('../controllers/transporterController');
const offerController = require('../controllers/offerController');
const throwController = require('../controllers/throwController');
const throwShipperController = require('../controllers/throwShipperController');

const routerShipper = express.Router();
routerShipper.get('/shipper', shipperController.getAllShippers);
routerShipper.post('/shipper', shipperController.getAllShipperByDoc);
routerShipper.post('/register-shipper', shipperController.createShipper);
routerShipper.put('/update-shipper/:id', shipperController.updateShipper);

const routerTransporter = express.Router();
routerTransporter.get('/transporter', transporterController.getAllTransporters);
routerTransporter.post('/transporter', transporterController.getAllTransporterByDoc);
routerTransporter.post('/register-transporter', transporterController.createTransporter);
routerTransporter.put('/update-transporter/:id', transporterController.updateTransporter);

const routeOffer = express.Router();
routeOffer.get('/offer', offerController.getAllOffers);
routeOffer.get('/offer/:id', offerController.getAllOffersById);
routeOffer.post('/register-offer/:id', offerController.createOffer);
routeOffer.delete('/offer', offerController.deleteOffersById);

const routerThrow = express.Router();
routerThrow.get('/throw', throwController.getAllThrows);
routerThrow.get('/throw/:id', throwController.getAllThrowsByIdProvider);
routerThrow.post('/register-throw/:id', throwController.createThrow);

const routerThrowsByCustomer = express.Router();
routerThrowsByCustomer.get('/throw-shipper/:id', throwShipperController);

module.exports = {
    routerShipper,
    routerTransporter,
    routeOffer,
    routerThrow,
    routerThrowsByCustomer,
};
