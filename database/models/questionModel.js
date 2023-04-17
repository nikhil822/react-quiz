const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    quizName: {
        type: String,
        required: true,
    },
    quizDesc: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
    addQuestions: {
        type: Array,
        required: true,
    }
})

mongoose.model('Question', questionSchema)
