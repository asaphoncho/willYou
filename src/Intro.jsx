import {useState, useRef, useEffect} from 'react'
import './App.css'
import mySound from "./assets/folkSong.mp3";


function Intro({fadeOut, currentMessage, messages, icons, isRunning, changeMessage, buttonActive, startTrials, subtitle,restart}){
    const audioRef = useRef(null);
    // Create audio once

function playSong(){
        audioRef.current = new Audio(mySound);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;
    
        audioRef.current.play().catch(() => {
          // Autoplay may fail unless triggered by user interaction
          console.log("Autoplay blocked by browser.");
        });
    
        return () => {
          audioRef.current.pause();
          audioRef.current = null;
        };
      }
    

    function handleSwitch(){
        startTrials()
    }
    function handleRestart(){
        restart()
    }

    return(
        <>
            <div className='mainscreenDiv'>
                <span className={`displayMessage ${fadeOut ? 'fade': ""}`} style={currentMessage > 0 ? {fontSize:'5rem', color:'#ffefca', fontFamily:'"Playfair Display", serif'} : null}>{messages[currentMessage]}<i style={{color:'#aa4fc2', fontSize:'4rem'}} className={`icon ${icons[currentMessage]}`}></i></span>
                {currentMessage > 0 && currentMessage < messages.length ? <span style={{bottom:'2rem', position:'absolute', fontSize:'1.5rem'}}>{`[${subtitle[currentMessage]}]`}</span>: null}
                {currentMessage > 0 || buttonActive == false ?  null : <div className='paragraphDiv' style={{fontSize: '1.5rem', fontFamily:'"Playfair Display", serif', color:'#ffefca', rowGap:'0.5rem', display:'flex'}}>
                    <span>Hearken well, brave soul.</span>
                    <span>For love is no trifling thing, nor is it given without proof.
                    Before thee lie the Trials of Love, forged to test thy desire, thy wit, and the choices of thy heart.</span>
                    <span>“What are these trials?” thou askest.</span>
                    <span>Ah… let the tale begin.</span>
                    <i style={{color:'#ffefca'}} className=" fa-solid fa-scroll"></i>
                </div>}
                {currentMessage < messages.length ? 
                buttonActive ? <button className='mainButton' onClick={isRunning ? null : ()=>{playSong(); changeMessage()}}>Start</button> : null 
                : <>
                    <div style={{width:'60%', padding: '1rem', fontSize: '2rem', fontFamily:'"Playfair Display", serif', color:'#ffefca', rowGap:'2rem', display:'flex', flexDirection:'column'}}>
                        <span>So thou hast chosen to undertake the Trials. Heed this warning well: they are no gentle sport. Many a brave soul hath perished in their attempt.</span>
                        <span>Shouldst thou press onward from this moment forth, thou dost willingly wager thy very life, that thou might prove thy worth in love before thine chosen one.</span>
                        <span>Thy first charge is thus: reclaim thine heart, which hath been most treacherously stolen by the famed and cunning shadow-blade — the Valentine Marauder.🥷</span>
                    </div>
                    <button className='mainButton' onClick={handleSwitch}>Start Now</button>
                </>
                }
            </div>
        </>
    )
}

export default Intro