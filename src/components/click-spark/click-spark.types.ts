import React from 'react'

export interface ClickSparkProps{
    sparkColor?: string;
    sparkSize?: number;
    sparkRadius?: number;
    sparkCount?: number;
    duration?: number;
    easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
    extraScale?: number;
    children?: React.ReactNode;
}

export interface Spark{
    x: number;
    y: number;
    angle: number;
    startTime: number;
}