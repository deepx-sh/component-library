import { useEffect, useState,useRef } from "react";
import type { TrueFocusProps, FocusRect } from "./true-focus.types";

export default function TrueFocus({
    sentence = 'React Typescript',
    separator = ' ',
    manualMode = false,
    blurAmout = 5,
    borderColor = 'green',
    glowColor = 'rgba(0,255,0,0.6)',
    animationDuration = 0.5,
    pauseBetweenAnimations=1
}:TrueFocusProps) {
    const words = sentence.split(separator);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 })
    

    useEffect(() => {
        if (!manualMode) {
            const interval = setInterval(
                () => {
                    setCurrentIndex(prev=>(prev+1)%words.length)
                },
                (animationDuration+pauseBetweenAnimations)*1000
            )

            return ()=>clearInterval(interval)
        }
    }, [manualMode, animationDuration, pauseBetweenAnimations, words.length])
    
    useEffect(() => {
        if (currentIndex === null || currentIndex === -1) return;
        if (!wordRefs.current[currentIndex] || !containerRef.current) return;

        const parentRect = containerRef.current.getBoundingClientRect()
        const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

        setFocusRect({
            x: activeRect.left - parentRect.left,
            y: activeRect.top - parentRect.top,
            width: activeRect.width,
            height:activeRect.height
        })
    }, [currentIndex, words.length])
    
    const handleMouseEnter = (index: number) => {
        if (manualMode) {
            setLastActiveIndex(index)
            setCurrentIndex(index);
        }
    }

    const handleMouseLeave = () => {
        if (manualMode) {
            setCurrentIndex(lastActiveIndex);
        }
    }
}