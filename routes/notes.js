const notes = require('express').Router();
// const data = require('../db/db.json')
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils')
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req, res) =>{
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.get('/:id',(req,res)=>{
    res.json(JSON.parse(data)[req.params.id]);
})

notes.post('/', (req, res) => {
    const { title, text } = req.body
    if(req.body) {
        const newTask = {
            title,
            text,
            id: uuidv4(),
        }
        readAndAppend(newTask,'db/db.json')
        res.json('Task added Successfully')
    } else{
        res.error('Error in posting task')
    }
});

notes.delete("/:id", (req,res) => {

});




module.exports = notes;