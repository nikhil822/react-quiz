const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Question = mongoose.model('Question')

router.get('/api/all', (req, res) => {
    Question.find()
        .then(questions => {
            console.log(questions)
            res.json({ questions })
        })
        .catch(err => {
            console.log(err)
        })
        
})

router.get('api/all/:id', async (req, res) => {
    // console.log(req.params.id)
    const { id } = req.params
    console.log(id)
    try {
        const question = await Question.findById(id)
        if (!question) {
            return res.status(404).json({error: 'No such question'})
        }
        res.status(200).json(question)
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/api/new', (req, res) => {
    const { quizName, quizDesc, points, addQuestions } = req.body
    if (!quizName || !quizDesc || !points || !addQuestions) {
        return res.status(422).json({ error: 'Please add all the fields' })
    }
    const question = new Question({
        quizName,
        quizDesc,
        points,
        addQuestions
    })
    question.save()
        .then(result => {
            res.json({ question: result })
        })
        .catch(err => {
            console.log(err)
        })

})

module.exports = router