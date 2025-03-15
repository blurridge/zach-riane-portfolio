import { atom } from "nanostores";

export const greetings = [
  "Hello!",
  "Hola!",
  "Bonjour!",
  "Hallo!",
  "Ciao!",
  "こんにちは!",
  "안녕하세요!",
  "Привет!",
  "Olá!",
  "नमस्ते!",
];

// Atoms for managing typing effect state
export const typingIndex = atom(0);
export const typingSubIndex = atom(0);
export const typingReverse = atom(false);
export const typingBlink = atom(true);

export const typingEffectConfig = {
  typingSpeed: 200,
};

export const handleTypingBlink = () => {
  typingBlink.set(!typingBlink.get());
};
