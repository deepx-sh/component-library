import type { ElementType,ReactNode } from "react";

export interface StarBorderProps<T extends ElementType = 'button'>{
    as?: T;
    className?: string;
    color?: string;
    speed?: string;
    thickness?: number;
    children?: ReactNode;
}