import type { ComponentProps, CSSProperties, ReactNode } from "react";

export interface TiltedCardProps{
    imageSrc: ComponentProps<'img'>['src'];
    altText?: string;
    captionText?: string;
    containerHeight?: CSSProperties['height'];
    containerWidth?: CSSProperties['width'];
    imageHeight?: CSSProperties['height'];
    imageWidth?: CSSProperties['width'];
    scaleOnHover?: number;
    rotateAmplitude?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    overlayContent?: ReactNode;
    displayOverlayContent?: boolean;
}