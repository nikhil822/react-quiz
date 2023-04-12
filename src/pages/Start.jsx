import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Start = () => {
    const navigate = useNavigate()

  return (
    <div className="content">
      <div className="settings">
        Quiz
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
