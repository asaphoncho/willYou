import { useEffect, useState } from "react";
import kiss from './assets/kizzes.png'
import sky from './assets/sky.png'
import traffic from './assets/traffic2.png'
import heartImg4 from './assets/heart00.png'
import heartImg0 from './assets/heart0.png'
import phone from './assets/phone.png'

function thirdTrial({handleSwitchGame}){
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [score, setScore] = useState(0)
    const [showValidation, setShowValidation] = useState(false)
    const [hearts, setHearts] =  useState([])

    let questionSet = [
        {
            question: "When first our paths did cross, for what alleged misdeed was I seized and brought to account?",
            options: ["Wrong parking", "Illegal U-turn", "Incomplete papers", "Reckless driving"],
            correctAnswer: "Illegal U-turn",
            image: traffic
        },
        {
            question: "Upon what blessed day did our lips first meet in tender union?",
            options: ["14th, February 2021", "16th February 2021", "13th, February 2021", "15th, February 2021"],
            correctAnswer: "13th, February 2021",
            image: kiss
        },
        {
            question: "Whenever distance doth part us, gaze upon the _____, and thou shalt feel my presence near thee.",
            options: ["Sky", "Stars", "Moon", "Trees"],
            correctAnswer: "Stars",
            image: sky
        },
        {
            question: "What were the first words thy beloved did send unto thee in secret missive (DM)?",
            options: ["Heyyyyy!", "Hiya!", "Your turn", "👁️👁️"],
            correctAnswer: "Your turn",
            image: phone
        }, 
        {
            question: 'Upon what day did we first confess our love, speaking the sacred words, “I cherish thee”?',
            options: ["27th April, 2020", "20th April, 2020", "26th April, 2020", "24th April, 2020"],
            correctAnswer: "27th April, 2020",
            image: heartImg4
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
            setScore(prev => prev + 1)
            console.log("correct!")
            setHearts(h => [...h, "goodheart"])
        }
        console.log(hearts)
        setTimeout(() => {
            setShowValidation(false)
            setSelectedOption(null)
            if(currentQuestionIndex < (questionSet.length - 1)){
                setCurrentQuestionIndex(prev => prev + 1)
            }
            if(currentQuestionIndex >= (questionSet.length - 1)){
                handleSwitchGame()
            }
        }, 1500)
    }

    return(<>
        <div className="thirdTrialPage">
            <span className="displayMessage" style={{fontSize:'4rem', color:'#ffc65d'}}>TRIAL OF KNOWLEDGE</span>
            <span style={{fontSize: '2rem', fontFamily:'"Jaini", serif', color:'#ffefca'}}>Let us wander the halls of cherished memory and recall the days of old. Score: {score}</span>
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