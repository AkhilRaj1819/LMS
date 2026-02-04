'use client';
import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ title, questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setShowResults(false);
    setScore(0);
  };

  if (showResults) {
    const percentage = ((score / questions.length) * 100);
    const passed = percentage >= 60;
    
    return (
      <div className="quiz-card-wrapper">
        <div className="quiz-card">
          <div className="quiz-card-left">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="45" r="20" fill="#FFE4B5" stroke="#2B2B2B" strokeWidth="2"/>
              <circle cx="52" cy="42" r="3" fill="#2B2B2B"/>
              <circle cx="68" cy="42" r="3" fill="#2B2B2B"/>
              <path d="M 52 52 Q 60 58 68 52" stroke="#2B2B2B" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <rect x="35" y="65" width="50" height="40" rx="5" fill="#4CAF50" stroke="#2B2B2B" strokeWidth="2"/>
              <path d="M 50 75 L 55 82 L 70 68" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="quiz-card-right">
            <div className="quiz-card-header">
              <div className="quiz-card-title-section">
                <div className="quiz-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15.5L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z" fill="#4CAF50" stroke="#4CAF50" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Data Structures Quiz Complete</h3>
              </div>
              <div className="quiz-best-score">
                <div className="score-label">Your Score</div>
                <div className="score-value">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L10 5.5L15 6L11.5 9.5L12.5 14.5L8 12L3.5 14.5L4.5 9.5L1 6L6 5.5L8 1Z" fill="#FFB300"/>
                  </svg>
                  <span>{score}/{questions.length}</span>
                </div>
              </div>
            </div>
            <p className="quiz-message">
              {passed 
                ? "Excellent! You've demonstrated strong understanding of data structures concepts."
                : "Keep practicing! Review the material and try again to improve your understanding."}
            </p>
            <div className="quiz-requirements">
              <div className="requirement-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="7" stroke="#9E9E9E" strokeWidth="1.5" fill="none"/>
                  <path d="M5 8L7 10L11 6" stroke="#9E9E9E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Get 60% or more</span>
              </div>
              <div className="requirement-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="7" stroke="#9E9E9E" strokeWidth="1.5" fill="none"/>
                  <path d="M8 4V8L11 10" stroke="#9E9E9E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>No time limit</span>
              </div>
            </div>
            <button className="quiz-retake-button" onClick={handleRetake}>
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h3>{title}</h3>
      <div className="quiz-progress">
        Question {currentQuestion + 1} of {questions.length}
      </div>
      <div className="question-container">
        <p className="question-text">{questions[currentQuestion].question}</p>
        <div className="options-container">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(index)}
            >
              {String.fromCharCode(65 + index)}. {option}
            </button>
          ))}
        </div>
      </div>
      <div className="quiz-navigation">
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>Previous</button>
        {currentQuestion < questions.length - 1 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit} className="submit-button">Submit Quiz</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;