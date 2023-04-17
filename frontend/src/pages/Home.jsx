import React, { useEffect, useState } from "react";
import "./Home.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

var idx = 1;
const Home = () => {
  const navigate = useNavigate()

  const [quizName, setQuizName] = React.useState("");
  const [quizDesc, setQuizDesc] = React.useState("");
  const [points, setPoints] = React.useState("");
  const [questions, setQuestions] = React.useState([
    {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: 0,
      index: 1
    }
  ]);
  const [addQuestions, setAddQuestions] = React.useState([
    {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: 0,
      index: 1
    }
  ]);
  
  const createUser = async (e) => {
    e.preventDefault()

    const user = {quizName, quizDesc, points, addQuestions}
    console.log(user)

    const res = await fetch('http://localhost:5000/api/new', {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await res.json()
    if(!res.ok){
      window.alert("Please fill all the fields")
    }else{
      window.alert("Quiz Created Successfully")
      navigate('/')
    }
  }
  

  const addQuestion = () => {
    
    console.log(questions)
    
      setAddQuestions([...addQuestions, questions]);
    
    idx = addQuestions.length + 1;
    setQuestions([
      {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: 0,
        index: idx
      }
    ])
  };
  console.log(addQuestions)

  const updateQuestion = (index, key, value) => {
    const newQuestions = [...questions];
    newQuestions[index][key] = value;
    setQuestions(v=>newQuestions);
  }
  
  const updateOption = (index, optionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[index][`option${optionIndex + 1}`] = value;
    setQuestions(newQuestions);
  }
  
  
  const updateAnswer = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].answer = value;
    setQuestions(v=>newQuestions);
  }
  

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Create Quiz</span>
        <div className="setting-select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your quiz name"
            variant="outlined"
            value={quizName}
            onChange={(e) => setQuizName(e.target.value)}
          />

          <TextField
            style={{ marginBottom: 25 }}
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            maxRows={4}
            value={quizDesc}
            onChange={(e) => setQuizDesc(e.target.value)}
          />
          <TextField
            style={{ marginBottom: 25 }}
            label="Points for each question"
            variant="outlined"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={addQuestion}
          >
            Add Question
          </Button>
          {questions.map((question, index) => (
            <div key={index} className="question">
              <h3>Question {question.index}</h3>
              <TextField
                style={{ marginBottom: 5 }}
                label="Enter your question"
                variant="outlined"
                value={question.question}
                onChange={(e) =>
                  updateQuestion(index, "question", e.target.value)
                }
              />
              <h4>Options:</h4>
              <TextField
                style={{ marginBottom: 5 }}
                label="Option 1"
                variant="outlined"
                value={question.option1}
                onChange={(e) =>
                  updateOption(index, 0, e.target.value)
                }
              />
              <input
                type="radio"
                name={`answer-${index}`}
                checked={question.answer === 0}
                onChange={(e) =>
                  updateAnswer(index, 0)
                }
              />
              <TextField
                style={{ marginBottom: 5 }}
                label="Option 2"
                variant="outlined"
                value={question.option2}
                onChange={(e) =>
                  updateOption(index, 1, e.target.value)
                }
              />
              <input
                type="radio"
                name={`answer-${index}`}
                checked={question.answer === 1}
                onChange={(e) =>
                  updateAnswer(index, 1)
                }
              />
              <TextField
                style={{ marginBottom: 5 }}
                label="Option 3"
                variant="outlined"
                value={question.option3}
                onChange={(e) =>
                  updateOption(index, 2, e.target.value)
                }
              />
              <input
                type="radio"
                name={`answer-${index}`}
                checked={question.answer === 2}
                onChange={(e) =>
                  updateAnswer(index, 2)
                }
              />
              <TextField
                style={{ marginBottom: 5 }}
                label="Option 4"
                variant="outlined"
                value={question.option4}
                onChange={(e) =>
                  updateOption(index, 3, e.target.value)
                }
              />
              <input
                type="radio"
                name={`answer-${index}`}
                checked={question.answer === 3}
                onChange={(e) =>
                  updateAnswer(index, 3)
                }
              />

            </div>
          ))}
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: 20}}
            onClick={createUser}
          >
            Create Quiz
          </Button>
        </div>
      </div>
      <img src="/pic.jpg" className="banner" alt="Quiz" />
    </div>
  );
};

export default Home;
