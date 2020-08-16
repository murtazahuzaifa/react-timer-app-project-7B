import React from 'react';
import style from './style.module.css';
import {TimerType} from '../../Types';

const TimeDisplayer: React.FC<TimerType> = ({min, sec})=>{
    const minutes = min.toString().length > 1 ? min : `0${min}`;
    const seconds = sec.toString().length > 1 ? sec : `0${sec}`;
    return(
        <div className={style.timerDisplayer}>
            <span className="minutes">{minutes}</span>
             :
            <span className="seconds">{seconds}</span>
        </div>
    )
}

export default TimeDisplayer;