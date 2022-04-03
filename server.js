const express = require('express');
const mongoose = require('mongoose');

const server = express(); //Routes, Server starten/stoppen etc. (Rundum Paket)
server.use(express.json()); //Requests im JSON Format

const router = express.Router();
server.use(router);
router.get('/', (req, res) => res.send('It works'));


server.listen(3030, () => console.log('Server running on port 3030')); //gibt Programm einen Port in unserem lokalen Netzwerk; am Ende hinschreiben - führt server aus

