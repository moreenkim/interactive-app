const express = require('express');
const app = express();

const router = require('./router.js');

app.use(express.static('public'));

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use('/', router);
app.listen(3001);
