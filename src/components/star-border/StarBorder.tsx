import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { StarBorderProps } from "./star-border.types";

export default function StarBorder<T extends ElementType = 'button'>({
    as,
    className = '',
    color = 'white',
    speed = '6s',
    thickness = 1,
    children,
    ...props
    
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
    const Component = as || 'button';

    return (
        <Component
            className={`relative inline-block py-px px-px overflow-hidden rounded-[20px] ${className}`}
            {...props}
        >
            <div
                className="absolute w-[300%] h-[50%] opacity-70 -bottom-2.75 right-[-250%] rounded-full animate-star-movement-bottom z-0"
                style={{
                    background: `radial-gradient(circle,${color} 0%,transparent 10%),radial-gradient(circle,${color} 10%,transparent 20%),radial-gradient(circle,${color} 20%,transparent 40%)`,
                    animationDuration:speed
                }}
            />
            
            <div
                className="absolute w-[300%] h-[50%] opacity-70 -top-2.5 left-[-250%] rounded-full animate-star-movement-top z-0"
                style={{
                    background: `radial-gradient(circle,${color} 0%,transparent 10%),radial-gradient(circle,${color} 10%,transparent 20%),radial-gradient(circle,${color} 20%,transparent 40%)`,
                    animationDuration:speed
                }}
            />

            <div
                className="relative z-10 bg-slate-900 border border-slate-800 text-white text-center rounded-[20px]"
                style={{
                    padding: '12px 24px',
                    borderWidth:`${thickness}px`
                }}
            >
                {children}
            </div>
        </Component>
    )
}