const mongoose = require('mongoose');
const quizSchema = new mongoose.Schema({
    question: String,
    answer: String,
    completed: Boolean,
    tag: String,
});

module.exports = mongoose.model('quiz', quizSchema); //Typ der Daten definiert bis hier hin