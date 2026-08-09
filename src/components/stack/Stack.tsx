import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { CardRotate } from "./CardRotate";
import { useInMobile } from "../../hooks/useInMobile";
import type { StackProps,CardItem } from "./stack.types";

const DEFAULT_IMAGE = [
  'https://images.unsplash.com/photo-1779361525614-2daa01ed2607?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1755416574341-60048386e0d7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1785867728016-8779a1a5bab5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1778674556730-357e85ec6cb2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];
const Stack = ({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint=768
}: StackProps) => {
  const isMobile = useInMobile(mobileBreakpoint);
  const [isPaused, setIsPaused] = useState(false);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shoudEnableClick = sendToBackOnClick || shouldDisableDrag;

  const createInitialStack = (): CardItem[] => {
    if (cards.length) {
      return cards.map((content, index) => ({ id: index + 1, content }));
    }

    return DEFAULT_IMAGE.map((src, index)=> ({
      id: index + 1,
      content: (
        <img src={src} alt={`card-${index+1}`} className="w-full h-full object-cover pointer-events-none" />
      )
    }))
  }

  const [stack, setStack] = useState<CardItem[]>(createInitialStack);

  useEffect(() => {
    if (cards.length) {
      setStack(cards.map((content, index) => ({ id: index + 1, content })))
    }
  }, [cards]);

  const sendToBack = (id: number) => {
    setStack(prev => {
      const newStack = [...prev];
      const index = newStack.findIndex(card => card.id === id);
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    })
  }

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay)
      
      return () => clearInterval(interval)
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);
  return (
    <div className="relative w-full h-full"
      style={{ perspective: 600 }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={()=>pauseOnHover && setIsPaused(false)}
    >

      {stack.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={shouldDisableDrag}
          >
            <motion.div
              className="rounded-2xl overflow-hidden w-full h-full"
              onClick={() => shoudEnableClick && sendToBack(card.id)}
              animate={{
                rotateZ: (stack.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - stack.length * 0.06,
                transformOrigin:'90% 90%'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping:animationConfig.damping
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        )
      })}
    </div>
  )
}

export default Stack
