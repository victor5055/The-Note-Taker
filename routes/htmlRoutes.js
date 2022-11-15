// Path to get the correct file path for the html//
const path = require('path');
const app = require('express').Router();

    //User is shown with an HTML page of content when users visit the page.//


    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    })
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    //Exporting app//
    module.exports = app;