const express = require('express');
const quizModel = require('../models/quiz.js');
const router = express.Router();
router.get('/', (req, res) => res.send('It works'));
router.get('/quizzes', async (req, res) => {
    try {
        const quizzes = await quizModel.find();
        res.json(quizzes);
    } catch (error) {
        console.log(error); //falls was schief gegangen ist
        res.status(500).send('Error while connecting to database'); //severseitiger fehler
    }
});


module.exports = router;