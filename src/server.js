import express from 'express';
// const express = require('express')
const app = express();
const port = 8000

app.get('/hello', (req, res) => {
    res.send('Hello from Jen');
})

app.listen(port, () => {
    console.log('Server is listening on Port ' + port);

})