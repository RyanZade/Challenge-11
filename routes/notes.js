const express = require('express');
const fs = require('fs');
const db = require('../db/db.json');
const uuid = require('uuid');
const router = express.Router();

router.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', function(err, data){
      if(err){
        console.log(err);
      }
      console.log(data);
        res.status(200).json(data);
    });
});

router.post('/', (req, res) => {
    let newNote = {...req.body, id:uuid.v4()}
    let modNotes = db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
});

router.delete('/:id', (req, res) => {
    // console.log(db);
    let filteredData = db.filter(note => note.id != req.params.id);
    console.log(filteredData);
    fs.writeFileSync('./db/db.json', JSON.stringify(filteredData));
});

module.exports = router
