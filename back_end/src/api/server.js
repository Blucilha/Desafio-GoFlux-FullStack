const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`App listening in port ${PORT}`));