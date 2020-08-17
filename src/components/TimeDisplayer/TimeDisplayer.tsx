import React from 'react';
import style from './TimeDisplayer.module.css';
import { TimerDisplayerType } from '../../Types';

const styling = {
    minCircle:{
        strokeDashoffset: '0'
    },
    secCircle:{
        strokeDashoffset: '1026',
    }
}

const TimeDisplayer: React.FC<TimerDisplayerType> = ({ min, sec, miliSec, timerIsOn, startTimer, stopTimer, resetTimer}) => {
    const minutes = min.toString().length > 1 ? min : `0${min}`;
    const seconds = sec.toString().length > 1 ? sec : `0${sec}`;
    const miliSeconds = miliSec.toString().length > 1 ? miliSec : `0${miliSec}`;

    const handleStartstop = ()=>{
        if(timerIsOn){ stopTimer() }
        else{ startTimer() }
    }

    styling.minCircle.strokeDashoffset = `${((miliSec/100)*961)+961}`;
    styling.secCircle.strokeDashoffset= `${((sec/60)*1026)+1026}`;

    return (
        <div className={`${style.timer}`}>
            <div>
                <button onClick={resetTimer} className={`${style.resetBtn}`}>Reset</button>
            </div>
            <div className={`${style.dialer}`}>
                <div className={`${style.time}`}>
                    <span className={`${style.minutes}`}>{minutes}</span>
                        :
                    <span className={`${style.seconds}`}>{seconds}</span>
                    <span className={`${style.miliSeconds}`}>{miliSeconds}</span>
                </div>
                <svg>
                    <circle  cx='50%' cy='50%' r='46.5%' />
                    <circle cx='50%' cy='50%' r='48%' style={{...styling.secCircle}}/>
                    <circle cx='50%' cy='50%' r='45%' style={{...styling.minCircle}} />
                </svg>
            </div>
            <div className={`${style.controller}`}>
                <button onClick={handleStartstop} >{timerIsOn?'Stop':'Start'}</button>
            </div>
        </div>
    )
}

export default TimeDisplayer;