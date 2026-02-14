import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import knight1 from './assets/myHeadNew.png'
import knight2 from './assets/knightMasked.png'
import knightHeadless from './assets/headless2.png'


function secondTrial(){
    const initialCups = [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 }
    ];
    const colors = ["white", "teal", "black", "yellow"]
    const [cups, setCups] = useState(initialCups);
    const [stoneCupId, setStoneCupId] = useState(null);
    const [phase, setPhase] = useState("reveal");
    const [selectedCup, setSelectedCup] = useState(null);
    const [gameStart, setGameStart] = useState(false)

    function shuffle(){
        const randomId = Math.floor(Math.random() * 4);
        setStoneCupId(randomId);

        setTimeout(() => {
            setPhase("shuffle");
            shuffleMultipleTimes();
        }, 1500);
    }
    
   /* useEffect(() => {
        const randomId = Math.floor(Math.random() * 4);
        setStoneCupId(randomId);

        setTimeout(() => {
            setPhase("shuffle");
            shuffleMultipleTimes();
        }, 1500);
    }, [gameStart]);*/
    const shuffleOnce = () => {
        setCups((prev) => {
            const arr = [...prev];
            const i = Math.floor(Math.random() * arr.length);
            const j = Math.floor(Math.random() * arr.length);
            [arr[i], arr[j]] = [arr[j], arr[i]];
            return arr;
        });
    };

    const shuffleMultipleTimes = async () => {
        for (let i = 0; i < 6; i++) {
            shuffleOnce();
            await new Promise((res) => setTimeout(res, 400));
        }
        setPhase("guess");
    };


    const shuffleCups = () => {
        let shuffled = [...cups];

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        setCups(shuffled);

        // Allow guessing after shuffle
        setTimeout(() => setPhase("guess"), 1000);
    };
    const handleGuess = (cupId) => {
    if (phase !== "guess") return;
    setSelectedCup(cupId);
    setPhase("result");
    };
    


    return(<>
    <div className="secondTrialPage">
        <span className="displayMessage" style={{fontSize:'4rem', color:'#ffc65d'}}>TRIAL OF DISCERNMENT</span>
        <span style={{fontSize: '2rem', fontFamily:'"Jaini", serif', color:'#ffefca'}}>All these knights are just and equally fair. Find the one for whom your heart yearns.</span>
        <div className="cups">
            {cups.map((cup) => (
                <motion.div
                key={cup.id}
                layout
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="cup"
                style={phase === "reveal" && cup.id === stoneCupId ? {backgroundImage: `url(${knight2})`} : {backgroundImage: `url(${knight2})`}}
                onClick={() => handleGuess(cup.id)}
                >
                {phase === "reveal" && cup.id === stoneCupId && (
                    <img src={knight1} className="stone" />
                )}

                {phase === "result" &&
                    selectedCup === cup.id &&
                    cup.id === stoneCupId && (
                    <img src={knight1} className="stone" />
                    )}
                </motion.div>
            ))}
        </div>
        {phase === "guess" &&(<>
            <span style={{fontSize:'1.5rem', color:'#ffefca', fontFamily:'"Playfair Display", serif'}}>Choose your knight</span>
        </>)}
        {stoneCupId ===  null &&(<>
            <button onClick={shuffle} className="mainButton">Play</button>
        </>)}
        {phase === "result" && (
            <>  
                {selectedCup === stoneCupId ? <span style={{fontWeight:'bold', fontSize:'1.5rem', color:'#417b78', fontFamily:'"Playfair Display", serif'}}>Correct!</span> : <span style={{fontWeight:'bold', fontSize:'1.5rem', color:'#f02255', fontFamily:'"Playfair Display", serif'}}>Wrong!</span>}
                <span style={{fontSize:'1.5rem', color:'#ffefca', fontFamily:'"Playfair Display", serif'}}></span>
                <button className="mainButton" onClick={()=> {setPhase("reveal"); setSelectedCup(null); setStoneCupId(null); shuffle()}}>Play again</button>
            </> 
        )}
    </div>      

    </>)
}

export default secondTrial