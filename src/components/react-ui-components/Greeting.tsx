import { useStore } from "@nanostores/react";
import {
  greetings,
  typingIndex,
  typingSubIndex,
  typingReverse,
  typingBlink,
  handleTypingEffect,
  initializeTypingEffect,
} from "@/stores/greetingStore"; // Assuming your store.ts file is in the same directory
import { useEffect } from "react";

const TypingEffect = () => {
  const index = useStore(typingIndex);
  const subIndex = useStore(typingSubIndex);
  const reverse = useStore(typingReverse);
  const blink = useStore(typingBlink);

  useEffect(() => {
    const typingEffectTimer = handleTypingEffect();
    return () => typingEffectTimer();
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkingInterval = initializeTypingEffect();
    return () => clearInterval(blinkingInterval);
  }, []);

  return (
    <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black px-4 whitespace-nowrap overflow-hidden min-h-[80px]">
      {`${greetings[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

export default TypingEffect;
