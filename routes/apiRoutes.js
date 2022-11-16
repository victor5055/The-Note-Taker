const app = require('express').Router();
const fs = require('fs');
let db = require('../db/db.json');

//Get API Request
app.get('/notes', (req, res) => {
    db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
  
    res.json(db);
  
  });
  
  //POST API Request
  app.post('/notes', (req, res) => {
    let newNote = { 
      id: Math.floor(Math.random() * 1000),
      title: req.body.title,
      text: req.body.text
    }
  
    //A Form Of A Controller
    db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db), (err, res) => {
      if(err) throw err;
    });
  
    res.json(db);
  
  })
  
  
  //Exporting app//
  module.exports = app;