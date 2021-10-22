const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {
    routerShipper,
    routerTransporter,
    routeOffer,
    routerThrow,
} = require('./controllers/router');

const app = express();

app.use(cors({
    origin: '*',
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routerShipper);
app.use(routerTransporter);
app.use(routeOffer);
app.use(routerThrow);

app.listen(3000, () => console.log('logado na port 3000!'));
