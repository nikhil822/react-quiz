import React from 'react'
import { Button } from '@mui/material'
import './Landing.css'
import { useNavigate } from 'react-router-dom'


const Landing = () => {
    const navigate = useNavigate()

    const createQuiz = () => {
        navigate('/create')
    }

    const startQuiz = () => {
        navigate('/start')
    }

  return (
    <div className='landing'>
        <div>
            <img src="/pic.jpg" className="banner" alt="Quiz" />
        </div>
        <div className='btn'>
            <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ marginTop: 20, marginRight: 20}}
                onClick={createQuiz}
            >
                Create Quiz
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ marginTop: 20}}
                onClick={startQuiz}
            >
                Start a Quiz
            </Button>
        </div>
    </div>
  )
}

export default Landing