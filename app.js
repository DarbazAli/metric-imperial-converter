'use strict';
console.clear();
const log = console.log;

// pull out packages
const express = require('express');
const apiRoute = require('./server/api');
const app = express();


/* ========================================== 
    SETUP TEMPLATE ENGINE
========================================== */
app.set('view engine', 'pug');
app.set('views', 'views');



/* ========================================== 
    USE MIDDLEWARES
========================================== */
app.use(express.static(__dirname + '/public'))

/* ========================================== 
    ROUTING
========================================== */
app
    .route('/')
    .get((req, res) => {
        res.render('index', {api_url: req.headers.host + '/api/convert'})
    })

apiRoute(app);

/* ========================================== 
    LISTEN
========================================== */
const PORT = process.env.PORT || 3000
app.listen( PORT, () => {
    log(`Server running on port ${PORT}`)
})