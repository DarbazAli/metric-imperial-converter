'use strict';
console.clear();
const log = console.log;

// pull out packages
const express = require('express');
const app = express();


app
    .route('/')
    .get((req, res) => {
        res.send('<h1>Hello Wordl!</h1>');
    })



/* ========================================== 
    LISTEN
========================================== */
const PORT = process.env.PORT || 3000
app.listen( PORT, () => {
    log(`Server running on port ${PORT}`)
})