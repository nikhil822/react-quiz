import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Start.css";

const Start = () => {
    const navigate = useNavigate()
    const [questions, setQuestions] = React.useState([])

    useEffect(() => {
      fetch('http://localhost:5000/api/all')
        .then((res) => res.json())
        .then((data) => {
          setQuestions(data)
        })
      }, [])
      console.log(questions)
      
  return (
    <div className="content">
      <div className="settings1">
        Quiz
        <div className="main-box">
          {questions.questions && questions.questions.map((question) => (
          <div className="box">
            <h2>{question.quizName}</h2>
            <p>{question.quizDesc}</p>
          </div>
            ))}
        </div>
        <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: 20}}
            onClick={() => navigate('/quiz')}
          >
            Start Quiz
          </Button>
      </div>
      <img src="/pic.jpg" className="banner" alt="Quiz" />
    </div>
  );
};

export default Start;
