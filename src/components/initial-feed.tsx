import { useEffect, useRef, useState } from "react";

interface Props {
  text?: string;
}

export const InitialFeed = ({
  text = "Welcome to your terminal. Type `help` to see available commands.",
}: Props) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    indexRef.current = 0; // Reset index when text changes

    const typeCharacter = () => {
      if (indexRef.current < text.length) {
        setDisplayedText((prev) => prev + text.charAt(indexRef.current));
        indexRef.current += 1;
        timeoutRef.current = setTimeout(typeCharacter, 10);
      }
    };

    typeCharacter();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text]);

  return displayedText;
};
