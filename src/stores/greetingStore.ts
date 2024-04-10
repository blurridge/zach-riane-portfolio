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

export const handleTypingEffect = () => {
  if (
    typingSubIndex.get() === greetings[typingIndex.get()].length + 1 &&
    !typingReverse.get()
  ) {
    // Wait before starting to delete the text
    setTimeout(() => typingReverse.set(true), 2000);
    return () => {}; // Return an empty function to avoid 'undefined' being returned
  }

  if (typingSubIndex.get() === 0 && typingReverse.get()) {
    // Immediately after finishing deleting, start typing the next greeting
    typingReverse.set(false);
    const newIndex = (typingIndex.get() + 1) % greetings.length;
    typingIndex.set(newIndex);
    return () => {}; // Return an empty function to avoid 'undefined' being returned
  }

  const timeout = setTimeout(() => {
    const newSubIndex = typingSubIndex.get() + (typingReverse.get() ? -1 : 1);
    typingSubIndex.set(newSubIndex);
  }, Math.max(typingReverse.get() ? 75 : typingEffectConfig.typingSpeed, Math.random() * 350));

  return () => clearTimeout(timeout);
};

export const handleTypingBlink = () => {
  typingBlink.set(!typingBlink.get());
};

// Set up listeners
export const initializeTypingEffect = () => {
  return setInterval(handleTypingBlink, 500);
};
