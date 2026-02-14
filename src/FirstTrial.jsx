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
    let frame1arr = [frame1, frame1hue]
    let frame2arr = [frame2, frame2hue]
    let frame3arr = [frame3, frame3hue]
    let frame4arr = [frame4, frame4hue]
    let frame5arr = [frame5, frame5hue]
    let frame6arr = [frame6, frame6hue]
    let frames = [frame1arr,frame2arr,frame3arr,frame4arr,frame5arr,frame6arr]
    let hearts = [heartImg0, heartImg1, heartImg2, heartImg3, heartImg4, heartImg5,]
    
    function gotNinja(){
        if(clickCounter < 5){
            if(clickCounter >= 1){
                setClickCounter(c => c + 2)
                if(clickCounter === 4){
                    setTimeout(handleSwitchGame(), 1500)
                }
            }
            if(clickCounter === 0){
                setClickCounter(c => c + 1)
            }
           // animate();
        }
        else if(clickCounter === 5){

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
        <div onClick={clickCounter < 5 &&  clickCounter > 0? ()=>{setClickCounter(c => c - 1)}: null} style={{width:'100vw', display:'flex', flexDirection:'column', alignItems:'center'}}>            
            <div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', fontSize: '2rem', fontFamily:'"Jaini", serif', color:'#ffefca', rowGap:'1.5rem', paddingTop:'2rem'}}>
                <span className="displayMessage" style={{fontSize:'4rem', color:'#ffc65d'}}>TRIAL OF SWIFTNESS</span>
                <span>The ninja is about to get away with your heart. Take it back and return it to the rightful owner! 😏</span>
                <img src={hearts[clickCounter]} style={{height:'16rem', width:'18rem'}} alt="" />
                <h1 style={{fontFamily:'"Playfair Display", serif', fontSize:'8rem', fontWeight:'medium', position:'absolute', marginTop:'12rem' }}>{clickCounter}</h1>         
            </div>                    
            <div className="runnerContainer" style={{marginTop:'1rem'}}>
                <img onClick={gotNinja} className="runner" src={frames[frameCounter][0]} style={{height:'9rem', width:'9rem', cursor:'pointer'}} alt="" />
            </div>
            <span style={{fontSize:'1.5rem', fontWeight:'bold', color:'#2a8c89'}}>Nice one!</span>       
        </div>
    </>)
}

export default firstTrial