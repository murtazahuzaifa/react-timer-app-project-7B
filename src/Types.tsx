import { type } from "os";

export type TimerType = {
    min: number,
    sec: number,
}

export type ButtonType = {
    onClick: ()=>void;
    className?: string;
}