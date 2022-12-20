const path = require('path');
const express = require('express');
const notes = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
    return res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.use('/api/notes', notes);

app.listen(PORT, () => console.log('Now listening'));

