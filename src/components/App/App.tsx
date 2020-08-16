import React, { useState } from 'react';
import style from './style.module.css';
import { TimeDisplayer, Button } from '../../components';
import { TimerType } from '../../Types';

// let incrementTime:, handleStart, handleStart, handleStop, handleReset ;
export let timerIsOn: boolean, setTimerIsOn: (val: boolean) => void, time: TimerType, setTime: (val: TimerType) => void, timerInterval: number, setTimerInterval: (val: any) => void;
export let startTimer: () => void, stopTimer: () => void, resetTimer: () => void;

const App: React.FC = () => {
    [timerInterval, setTimerInterval] = useState<any>(0);
    [time, setTime] = useState<TimerType>({ min: 0, sec: 0 });
    [timerIsOn, setTimerIsOn] = useState<boolean>(false);

    startTimer = () => {
        if (!timerIsOn) {
            setTimerIsOn(true);
            setTimerInterval(setInterval(() => {
                time.sec += 1;
                if (time.sec > 59) {
                    time.sec = 0;
                    time.min += 1;
                }
                setTime({ ...time });
            }, 1000));
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
        setTime({ min: 0, sec: 0 });
    }

    return (
        <div className={style.container}>
            <div>
                <TimeDisplayer min={time.min} sec={time.sec} />
            </div>
            <div className="buttons">
                <Button className={"start"} onClick={startTimer} >Start</Button>
                <Button className={"stop"} onClick={stopTimer} >Stop</Button>
                <Button className={"reset"} onClick={resetTimer} >Reset</Button>
            </div>
        </div>
    )
}

export default App;