import { useEffect, useState } from "react";

interface Props {
  text?: string;
}

export const InitialFeed = ({
  text = "Welcome to your terminal. Type help to see available commands.",
}: Props) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typeCharacter = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index += 1;
        setTimeout(typeCharacter, 10);
      }
    };

    typeCharacter();

    // Clean up in case component is unmounted during typing
    return () => {
      index = text.length;
    };
  }, [text, 10]);

  return displayedText;
};
