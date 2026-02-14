import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Intro from './Intro.jsx'
import FirstTrial from './FirstTrial.jsx'
import SecondTrial from './SecondTrial.jsx'
import ThirdTrial from './thirdTrial.jsx'
import './App.css'
import typing from './assets/typing.mp3'

function App() {
  const [currentScreen, setCurrentScreen] = useState("secondTrial")
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [buttonActive, setButtonActive] = useState(true)

  let icons = ["","fa-solid fa-earth-africa","fa-solid fa-person-harassing", "fa-solid fa-heart", "fa-solid fa-face-tired", "fa-solid fa-wallet fa-regular fa-face-frown","fa-solid fa-hand-holding-dollar", "fa-regular fa-face-grin-tongue-squint", "fa-regular fa-face-angry", "fa-regular fa-lightbulb", "fa-regular fa-face-grin-tongue-squint", "fa-regular fa-face-frown", "fa-solid fa-handshake" ]
  let subtitle = ["", "Since the olden days, when love was plenty, but money, not so much", "The occasion of Valentine has always been a cause of great debate in the land", "The women claimed it was a special day to honour love and devotion", "The men, however, saw it as unnecesary trouble", "Account balances were checked, to great annoyance", "The women believed the men were just too broke", "The men on the other hand, believed the women were just hungry beeshes", "And so the tension grows the closer valentine gets each year", "In desperation, most men devised a mischievous tactic.", "They would break up just before and make up after the dreadful occasion.","However, this strategy could only last for so long before it was found out", "And so, a council of women and men was formed.", "Together, they came up with the most fair...and most dramatic solution", "A sacred test of the heart, the mind and the will", "A trial to determine one's Valentine-worthiness.",
  "...THE TRIALS OF LOVE!"]
  let messages = [
  "THE TRIALS OF LOVE",
  "Since the days of olde, when hearts were bold and purses… less so.",
  "The sacred Rite of Valentine hath long stirred great debate across the land.",
  "The fair maidens proclaimed it a hallowed day to honor love and devotion.",
  "The noble menfolk, however, deemed it a most grievous inconvenience.",
  "Coin was counted. Brows were furrowed.",
  "The women believed the men merely lacked the gold.",
  "The men believed the women were, in truth, simply very hungry.",
  "Thus arose great tension each year as the fateful day drew nigh.",
  "In desperation, many a man devised cunning means of escape.",
  "They did part ways just before the day, only to reunite when the danger had passed.",
  "Yet such trickery could not endure forever.",
  "And so, a wise council—of maidens and men alike—was convened.",
  "From their counsel came a solution most fair… and most dramatic.",
  "A sacred proving, to test the heart, the mind, and the will.",
  "A trial to determine true Valentine-worthiness.",
  "Behold… THE TRIALS OF LOVE!"
]

  useEffect(() => {
    // start fade out
    setFadeOut(true);
    var audio = new Audio(typing)
   // audio.play()

    // after fade-out, swap text & fade in
    const timeout = setTimeout(() => {
      //setDisplayText(text);
      setFadeOut(false);
    }, 500); // match CSS duration

    return () => clearTimeout(timeout);
  }, [currentMessage]);

  /*function changeMessage(){
    setButtonActive(false)
    setCurrentMessage(1)
    setIsRunning(true);
    console.log(isRunning)
    const interval = setInterval(
      ()=>{
          setCurrentMessage((c)=> c + 1)
          console.log(currentMessage)
          // displayMessage.classList.remove('fade')
        // i++
          setFadeOut(true)

          if (currentMessage >= messages.length){
            console.log(currentMessage)
            clearInterval(interval)
            setIsRunning(false)
            setButtonActive(true)
          }
      }, 3000
    ) ;
  }*/
  function startTrials(){
    setCurrentScreen("firstTrial")
  }
  function changeMessage() {
  setButtonActive(false);
  setIsRunning(true);

  const interval = setInterval(() => {
    setCurrentMessage(c => {
      const next = c + 1;

      if (next >= messages.length) {
        clearInterval(interval);
        setIsRunning(false);
        setButtonActive(true);
      }

      return next;
    });

    setFadeOut(true);
  }, 4000);
  }

  if(currentScreen == "intro"){return (
    <>
      <div className='body'>
        <Intro fadeOut={fadeOut} currentMessage={currentMessage} messages={messages} icons={icons} isRunning={isRunning} buttonActive={buttonActive} changeMessage={changeMessage} startTrials={startTrials} subtitle={subtitle} restart={()=> setCurrentMessage(0)}/>
      </div>
    </>
  )}
  else if(currentScreen == "firstTrial"){return(
    <>
      <div className='body'>
        <FirstTrial handleSwitchGame={()=> setCurrentScreen("secondTrial")} />
      </div>
    </>
  )}
  else if(currentScreen == "secondTrial"){return(
    <>
      <div className='body'>
        <SecondTrial handleSwitchGame={()=> setCurrentScreen("thirdTrial")}/>
      </div>
    </>
  )}
  else if(currentScreen == "thirdTrial"){return(
    <>
      <div className='body'>
        <ThirdTrial/>
      </div>
    </>
  )}
}

export default App
