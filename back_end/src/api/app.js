const express = require('express');
const cors = require('cors');
const {
    routerShipper,
    routerTransporter,
    routeOffer,
    routerThrow,
} = require('./router');
const handlerError = require('../middlewares/handlerError');

const app = express();

app.use(cors({
    origin: '*',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routerShipper);
app.use(routerTransporter);
app.use(routeOffer);
app.use(routerThrow);

app.use(handlerError);
app.all('*', (_req, res) => res.status(404).json({ message: 'Not Found' }));

module.exports = app;
