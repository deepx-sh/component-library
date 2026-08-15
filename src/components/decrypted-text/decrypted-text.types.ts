import type {HTMLMotionProps} from 'motion/react'

export interface DecryptedTextProps extends HTMLMotionProps<'span'>{
    text: string;
    speed?: number;
    maxIterations?: number;
    sequential?: boolean;
    revealDirection?: 'start' | 'end' | 'center';
    useOriginalCharsOnly?: boolean;
    characters?: string;
    clasName?: string;
    encryptedClassName?: string;
    parentClassName?: string;
    animateOn?: 'view' | 'hover' | 'inViewHover' | 'click';
    clickMode?:'once'|'toggle'
}