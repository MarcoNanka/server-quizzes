const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const quizRoutes = require('./routes/quizzes.js');

dotenv.config(); //Zugriff auf .env
const mongoUrl = process.env.MONGO_URL; //environment variable

mongoose.connect(mongoUrl);

const database = mongoose.connection; //infos über datenbank

database.once('connected', () => console.log('Database connected')); //sobald connected -> console log
database.on('error', (error) => console.log(error)); //spezifischer error wird gelogt sobald dieser auftritt (von mongoose "erstellt")

const server = express(); //Routes, Server starten/stoppen etc. (Rundum Paket)
server.use(express.json()); //Requests im JSON Format

server.use(quizRoutes);




server.listen(3030, () => console.log('Server running on port 3030')); //gibt Programm einen Port in unserem lokalen Netzwerk; am Ende hinschreiben - führt server aus

