import { useEffect, useState } from "react";
import frame1 from './assets/Layer1.png'
import frame2 from './assets/Layer2.png'
import frame3 from './assets/Layer3.png'
import frame4 from './assets/Layer4.png'
import frame5 from './assets/Layer5.png'
import frame6 from './assets/Layer6.png'
import frame1hue from './assets/layer1hue.png'
import frame2hue from './assets/layer2hue.png'
import frame3hue from './assets/layer3hue.png'
import frame4hue from './assets/layer4hue.png'
import frame5hue from './assets/layer5hue.png'
import frame6hue from './assets/layer6hue.png'
import heartImg0 from './assets/heart0.png'
import heartImg1 from './assets/heart1.png'
import heartImg2 from './assets/heart2.png'
import heartImg3 from './assets/heart3.png'
import heartImg4 from './assets/heart4.png'
import heartImg5 from './assets/heart5.png'

function firstTrial({handleSwitchGame}){
    const [clickCounter, setClickCounter] = useState(0)
    const [frameCounter, setFrameCounter] = useState(0)
    const [clickedState, setClickedState] = useState(0)
    const [attemptRemarks, setAttemptRemarks] = useState()
    const [remarkType, setRemarkType] = useState()
    let badRemarks = ["Thou swing’st like a drunken squire!",
  "Hah! Is that thy best, clumsy peasant?",
  "I have seen turtles charge faster than thee!",
  "Art thou blind, or merely cursed?",
  "By the king’s beard, thou fightest like a baker!",
  "Swing harder, milord! I scarce felt the wind!",
  "Didst thou drop thy courage with thy aim?",
  "Thy reflexes nap whilst I dance!",
  "A snail would have struck me by now!",
  "Come now, swing true — or swing home!",
  "Is thy arm made of pudding?",
  "Thou couldst not strike water in the sea!",
  "I shall keep thy heart and thy dignity!",
  "Even the village fool aims better!",
  "Mayhap love hath weakened thy blade!",
  "Thou fightest as though wooing a ghost!",
  "By all the saints, that was pitiful!",
  "Keep trying, dear knight — I adore the sport!",
  "Thy heart is mine, and thy aim is tragic!",
  "Hast thou mistaken me for the wind?"]
    let goodRemarks = ["Curse thee and thy swift hands!",
  "Ack! A foul strike!",
  "By the heavens, thou hast teeth!",
  "Witchcraft! That blow was witchcraft!",
  "Mercy! Thou art quicker than thou look!",
  "I felt that through my doublet!",
  "Well struck, knave!",
  "Blast it all!",
  "Thou grow’st troublesome!",
  "I misjudged thee!",
  "That stung worse than heartbreak!",
  "Confound thee!",
  "I shall remember that insult!",
  "Is that fury I see?",
  "Very well — thou hast my attention!",
  "A worthy strike!",
  "Drat! Thou hast some skill after all!",
  "That blow was most impolite!",
  "Thou fightest with passion!",
  "The game grows dangerous!"]
    let frame1arr = [frame1, frame1hue]
    let frame2arr = [frame2, frame2hue]
    let frame3arr = [frame3, frame3hue]
    let frame4arr = [frame4, frame4hue]
    let frame5arr = [frame5, frame5hue]
    let frame6arr = [frame6, frame6hue]
    let frames = [frame1arr,frame2arr,frame3arr,frame4arr,frame5arr,frame6arr]
    let hearts = [heartImg0, heartImg1, heartImg2, heartImg3, heartImg4, heartImg5,]
    
    function gotNinja(){
        let randomIndex = Math.floor(Math.random(goodRemarks)*(goodRemarks.length))
        if(clickCounter < 5){
            if(clickCounter >= 1){
                setClickCounter(c => c + 2)
                setRemarkType("good")
                setAttemptRemarks(goodRemarks[randomIndex])
                setTimeout(()=>{setAttemptRemarks("")}, 1500)
                if(clickCounter === 4){
                    setRemarkType("good")
                    setAttemptRemarks("Fine! You win!")
                    setTimeout(()=>{handleSwitchGame(); setAttemptRemarks("")}, 1500)
                }
            }
            if(clickCounter === 0){
                setClickCounter(c => c + 1)
                setRemarkType("good")
                setAttemptRemarks(goodRemarks[randomIndex])
                setTimeout(()=>{setAttemptRemarks("")}, 1500)
            }
           // animate();
        }
        else if(clickCounter === 5){

        }
    }
    function missedNinja(){
        let randomIndex = Math.floor(Math.random(badRemarks)*(badRemarks.length))
        if(clickCounter < 5 &&  clickCounter > 0){
            setRemarkType("bad")
            setClickCounter(c => c - 1);
            setAttemptRemarks(badRemarks[randomIndex])
            setTimeout(()=>setAttemptRemarks(""), 1500)     
        }
        else if(clickCounter === 0){
            setRemarkType("bad")
            setAttemptRemarks(badRemarks[randomIndex])
            setTimeout(()=>setAttemptRemarks(""), 1500)
        }   
    }
    
    function animate() {
        setInterval(() => {
            setFrameCounter(c => {
            const next = c + 1;

            console.log('frame:', c);
            console.log('next:', next);

            // loop back to 0 when we reach the end
            return next >= frames.length ? 0 : next;
            });
        }, 500);
    }

    return(<>
        <div onClick={missedNinja} style={{width:'100vw', display:'flex', flexDirection:'column', alignItems:'center', zIndex:0}}>            
            <div style={{width:'80%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', fontSize: '1.5rem', fontFamily:'"Jaini", serif', color:'#ffefca', rowGap:'1.5rem', paddingTop:'2rem', textAlign:'center'}}>
                <span className="displayMessage" style={{fontSize:'4rem', color:'#ffc65d'}}>TRIAL OF SWIFTNESS</span>
                <span>The shadowed rogue maketh haste with thine heart! Pursue him swift and reclaim that which is rightfully thine — and restore it unto its true keeper.</span>
                <img src={hearts[clickCounter]} style={{height:'16rem', width:'18rem'}} alt="" />
                <h1 style={{fontFamily:'"Playfair Display", serif', fontSize:'8rem', fontWeight:'medium', position:'absolute', marginTop:'12rem' }}>{clickCounter}</h1>         
            </div>                    
            <div className="runnerContainer" style={{marginTop:'1rem'}}>
                <img onClick={gotNinja} className="runner" src={frames[frameCounter][0]} style={{height:'9rem', width:'9rem', cursor:'pointer'}} alt="" />
            </div>
            <span style={ remarkType === "bad"  ? {fontSize:'1.5rem', fontWeight:'bold', color:'#f02255'} :{fontSize:'1.5rem', fontWeight:'bold', color:'#2a8c89'}}>{attemptRemarks}</span>       
        </div>
    </>)
}

export default firstTrial