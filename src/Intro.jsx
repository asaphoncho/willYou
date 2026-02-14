import {useState} from 'react'
import './App.css'


function Intro({fadeOut, currentMessage, messages, icons, isRunning, changeMessage, buttonActive, startTrials, subtitle,restart}){
    

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
                buttonActive ? <button className='mainButton' onClick={isRunning ? null : changeMessage}>Start</button> : null 
                : <>
                    <button className='mainButton' onClick={handleSwitch}>Start Now</button>
                    <button className='mainButton' onClick={()=>{handleRestart; changeMessage}}>Replay Intro</button>
                </>
                }
            </div>
        </>
    )
}

export default Intro