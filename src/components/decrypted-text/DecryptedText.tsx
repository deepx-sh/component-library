import type { DecryptedTextProps } from "./decrypted-text.types";
import { motion } from 'motion/react'
import { useEffect, useState, useRef, useMemo, useCallback } from "react";


type Direction = 'forward' | 'reverse';

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = 'start',
    useOriginalCharsOnly = false,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
    clasName = '',
    parentClassName = '',
    encryptedClassName = '',
    animateOn = 'hover',
    clickMode = 'once',
    ...props
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState<string>(text);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
    const [hasAnimated, setHasAnimated] = useState<boolean>(false);
    const [isDecrypted, setIsDecrypted] = useState<boolean>(animateOn !== 'click');
    const [direction, setDirection] = useState<Direction>('forward');

    const containerRef = useRef<HTMLSpanElement>(null);
    const orderRef = useRef<number[]>([]);
    const pointerRef = useRef<number>(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    

    const availableChars = useMemo<string[]>(() => {
        return useOriginalCharsOnly
            ? Array.from(new Set(text.split(''))).filter(char => char !== '')
            : characters.split('');
    }, [useOriginalCharsOnly, text, characters])
    
    const shuffleText = useCallback(
        (originalText: string, currentRevealed: Set<number>) => {
            return originalText
                .split('')
                .map((char, i) => {
                    if (char === ' ') return ' ';
                    if (currentRevealed.has(i)) return originalText[i];
                    return availableChars[Math.floor(Math.random() * availableChars.length)]
                })
                .join('');
        },
        [availableChars]
    )

    const computeOrder = useCallback(
        (len: number): number[] => {
            const order: number[] = [];
            if (revealDirection === 'start') {
                for (let i = 0; i < len; i++) order.push(i);
                return order;
            }

            if (revealDirection === 'end') {
                for (let i = len - 1; i >= 0; i--) order.push(i)
                return order;
            }

            const middle = Math.floor(len / 2);
            let offset = 0;
            while (order.length < len) {
                if (offset % 2 === 0) {
                    const idx = middle + offset / 2;
                    if (idx >= 0 && idx < len) order.push(idx);
                } else {
                    const idx = middle - Math.ceil(offset / 2);
                    if(idx>=0 && idx<len) order.push(idx)
                }
                
                offset++;
            }

            return order.slice(0,len)
        },
        [revealDirection]
    )

    const fillAllIndices = useCallback((): Set<number> => {
        const s = new Set<number>();
        for (let i = 0; i < text.length; i++) s.add(i);
        return s;
    }, [text]);


    const removeRandomIndices = useCallback((set: Set<number>, count: number): Set<number> => {
        const arr = Array.from(set);
        for (let i = 0; i < count && arr.length > 0; i++){
            const idx = Math.floor(Math.random() * arr.length)
            arr.splice(idx, 1);
        }

        return new Set(arr);
    },[])
}