import React, { useState } from 'react';
import style from './App.module.css';
import { TimeDisplayer } from '../../components';
import { TimeType } from '../../Types';

// let incrementTime:, handleStart, handleStart, handleStop, handleReset ;
export let timerIsOn: boolean, setTimerIsOn: (val: boolean) => void, time:TimeType, setTime: (val:TimeType) => void, timerInterval:any, setTimerInterval: (val: any) => void;
export let startTimer: () => void, stopTimer: () => void, resetTimer: () => void;

const App: React.FC = () => {
    [timerInterval, setTimerInterval] = useState<any>(0);
    [time, setTime] = useState<TimeType>({ min: 0, sec: 0, miliSec:0 });
    [timerIsOn, setTimerIsOn] = useState<boolean>(false);

    startTimer = () => {
        if (!timerIsOn) {
            setTimerIsOn(true);
            setTimerInterval(setInterval(() => {
                time.miliSec += 1;
                if(time.miliSec>99){
                    time.miliSec = 0;
                    time.sec += 1;
                }
                if (time.sec > 59) {
                    time.sec = 0;
                    time.min += 1;
                }
                if(time.min >59){
                    resetTimer();
                }
                setTime({...time});
            }, 10));
        }
    }

    stopTimer = () => {
        if (timerIsOn) {
            setTimerIsOn(false);
            clearInterval(timerInterval);
        }
    }

    resetTimer = () => {
        clearInterval(timerInterval);
        setTime({ min: 0, sec: 0, miliSec:0 });
        setTimerIsOn(false);
    }

    return (
        <div className={`${style.container}`}>
            <TimeDisplayer
                min={time.min}
                sec={time.sec}
                miliSec={time.miliSec}
                timerIsOn={timerIsOn}
                startTimer={startTimer}
                stopTimer={stopTimer}
                resetTimer={resetTimer}                
            />
        </div>
    )
}

export default App;