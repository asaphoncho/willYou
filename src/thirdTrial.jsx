import { useEffect, useState } from "react";
import heartImg0 from './assets/heart0.png'
import heartImg1 from './assets/heart1.png'
import heartImg2 from './assets/heart3.png'
import heartImg4 from './assets/heart4.png'

function thirdTrial(){
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [score, setScore] = useState(0)
    const [showValidation, setShowValidation] = useState(false)

    let questionSet = [
        {
            question: "The first time we met, I was arrested for what offence?",
            options: ["Wrong parking", "Illegal U-turn", "Incomplete papers", "Reckless driving"],
            correctAnswer: "Illegal U-turn",
            image: heartImg0
        },
        {
            question: "When did we have our first kiss?",
            options: ["14th, February 2021", "16th February 2021", "12th, February 2021", "15th, February 2021"],
            correctAnswer: "12th, February 2021",
            image: heartImg0
        },
        {
            question: "Whenever we are far apart, look at the _____ and you will feel close to me",
            options: ["Sky", "Stars", "Moon", "Trees"],
            correctAnswer: "Stars",
            image: heartImg1
        },
        {
            question: "What was the first text message your soulmate sent to you via dm?",
            options: ["Hey there!", "Hiya!", "Your turn", "👁️👁️"],
            correctAnswer: "Your turn",
            image: heartImg4
        }, 
        {
            question: "Who first said I love you?",
            options: ["Me", "Me", "Me", "Me"],
            correctAnswer: "Me",
            image: heartImg2
        }
        
    ]

    function handleSelect(option) {
    if (selectedOption === option) {
        setSelectedOption(null)   // unselect
        console.log(selectedOption)
        
    } else {
        setSelectedOption(option) // select
        console.log(selectedOption)
    }
    }
    function handleSubmit() {
    if (!selectedOption) return

    const currentQuestion = questionSet[currentQuestionIndex]

    setShowValidation(true)

    if (selectedOption === currentQuestion.correctAnswer) {
        setScore(prev => prev + 10)
        console.log("correct!")
    }

    setTimeout(() => {
        setShowValidation(false)
        setSelectedOption(null)
        setCurrentQuestionIndex(prev => prev + 1)
    }, 1500)
    }

    return(<>
        <div className="thirdTrialPage">
            <span className="displayMessage" style={{fontSize:'4rem', color:'#ffc65d'}}>TRIAL OF KNOWLEDGE</span>
            <span style={{fontSize: '2rem', fontFamily:'"Jaini", serif', color:'#ffefca'}}>Let's see how well you know your partner {score}</span>
            <div className="quiz-div">
                <img className="question-image" src={questionSet[currentQuestionIndex].image} alt="" />
                <span className="question-text">{questionSet[currentQuestionIndex].question}</span>
                <div className="options-div">
                    <div className="option-section">
                        <div key={questionSet[currentQuestionIndex].options[0]} className="question-option" style={selectedOption === questionSet[currentQuestionIndex].options[0] ? {transform:'translate(0px, 4px)'}: null} onClick={() => handleSelect(questionSet[currentQuestionIndex].options[0])}>{questionSet[currentQuestionIndex].options[0]}</div>
                        <div key={questionSet[currentQuestionIndex].options[1]} className="question-option" style={selectedOption === questionSet[currentQuestionIndex].options[1] ? {transform:'translate(0px, 4px)'}: null} onClick={() => handleSelect(questionSet[currentQuestionIndex].options[1])}>{questionSet[currentQuestionIndex].options[1]}</div>
                    </div>
                    <div className="option-section">
                        <div key={questionSet[currentQuestionIndex].options[2]} className="question-option" style={selectedOption === questionSet[currentQuestionIndex].options[2] ? {transform:'translate(0px, 4px)'}: null} onClick={() => handleSelect(questionSet[currentQuestionIndex].options[2])}>{questionSet[currentQuestionIndex].options[2]}</div>
                        <div key={questionSet[currentQuestionIndex].options[3]} className="question-option" style={selectedOption === questionSet[currentQuestionIndex].options[3] ? {transform:'translate(0px, 4px)'}: null} onClick={() => handleSelect(questionSet[currentQuestionIndex].options[3])}>{questionSet[currentQuestionIndex].options[3]}</div>
                    </div>
                </div>
                <button className="mainButton" onClick={handleSubmit}>Save answer</button>
            </div>
            

        </div>
    </>)

}

export default thirdTrial