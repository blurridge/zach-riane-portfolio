import { useEffect, useState } from "react";

const greetings = [
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
const typingSpeed = 200; // milliseconds

const TypingEffect = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (subIndex === greetings[index].length + 1 && !reverse) {
      setReverse(true);
      setTimeout(() => setReverse(false), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setIndex((prev) => (prev + 1) % greetings.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : typingSpeed, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-7xl font-extrabold text-black px-4 whitespace-nowrap overflow-hidden min-h-[80px]">
      {`${greetings[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

export default TypingEffect;
