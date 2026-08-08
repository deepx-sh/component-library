import type { ReactNode } from "react";

export interface CardRotateProps{
    children: ReactNode;
    onSendToBack: () => void;
    sensitivity: number;
    disableDrag?:boolean
}

export interface AnimationConfig{
    stiffness: number;
    damping: number;
}

export interface StackProps{
    randomRotation?: boolean;
    sensitivity?: number;
    sendToBackOnClick?: boolean;
    cards?: ReactNode[];
    animationConfig?: AnimationConfig;
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
    mobileClickOnly?: boolean;
    mobileBreakpoint?: number;
}

export interface CardItem{
    id: number;
    content: ReactNode;
}