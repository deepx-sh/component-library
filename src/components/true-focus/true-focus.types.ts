export interface TrueFocusProps{
    sentence?: string;
    separator?: string;
    manualMode?: boolean;
    blurAmout?: number;
    borderColor?: string;
    glowColor?: string;
    animationDuration?: number;
    pauseBetweenAnimations?: number;
}

export interface FocusRect{
    x: number;
    y: number;
    width: number;
    height: number;
}