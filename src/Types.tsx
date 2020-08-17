export type TimerDisplayerType = {
    min: number,
    sec: number,
    miliSec: number,
    timerIsOn: boolean,
    startTimer: ()=>void,
    stopTimer: ()=>void,
    resetTimer: ()=>void,
}

export type TimeType = {
    min: number,
    sec: number,
    miliSec: number,
}
