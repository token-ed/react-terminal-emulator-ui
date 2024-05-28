import React, { useEffect, useRef, useState } from "react";
import { InitialFeed } from "./components/initial-feed";

export interface Command {
  command: string;
  result?: React.ReactNode;
  sideEffect?: () => void;
}

interface Props {
  commands: Array<Command>;
  userName: string;
  machineName: string;
  initialFeed?: string;
  onCommandNotFound?: (cmd: string) => string;
  disableClearCommand?: boolean;
}

const ignoredKeys = [
  // Control keys
  "Escape",
  "Tab",
  "Enter",
  "Shift",
  "Control",
  "Alt",
  "AltGraph",
  "Meta",
  "CapsLock",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Backspace",
  "Delete",
  "Insert",
  "NumLock",
  "ScrollLock",

  // Function keys
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",

  // Multimedia keys
  "Play",
  "Pause",
  "Stop",
  "PreviousTrack",
  "NextTrack",
  "VolumeUp",
  "VolumeDown",
  "Mute",

  // Navigation keys
  "Home",
  "End",
  "PageUp",
  "PageDown",

  // Windows/Command keys
  "ContextMenu",
];

export const Terminal = ({
  commands,
  machineName,
  userName,
  initialFeed,
  onCommandNotFound = (cmd: string) => `'${cmd}': command  not found.`,
  disableClearCommand,
}: Props) => {
  const allCommands: Array<Command> = disableClearCommand
    ? commands
    : [...commands, { command: "clear" }];
  const [output, setOutput] = useState<Array<React.ReactNode | undefined>>([]);
  const [focused, setFocused] = useState(true);
  const [currentLine, setCurrentLine] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  const caretRef = useRef<HTMLDivElement>(null);
  const hiddenSpanRef = useRef<HTMLSpanElement>(null);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Backspace")
      return setCurrentLine(currentLine.substring(0, currentLine?.length - 1));
    if (e.key === "Enter") {
      processCommand(currentLine);
      return setCurrentLine("");
    }

    if (!ignoredKeys.includes(e.key)) setCurrentLine(currentLine + e.key);
  };

  const processCommand = (cmd: string) => {
    const newOutput = [...output, `${userName}@${machineName}:~$ ${cmd}`];
    const foundCommand = allCommands.find((command) => command.command === cmd);

    if (!foundCommand) {
      newOutput.push(onCommandNotFound(cmd));
    } else {
      if (!disableClearCommand && foundCommand.command === "clear") return setOutput([]);
      if (foundCommand.result) newOutput.push(foundCommand.result);
      if (foundCommand.sideEffect) foundCommand.sideEffect();
    }

    setOutput(newOutput);

    if (inputRef.current) inputRef.current.scrollIntoView();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Update the caret position
  useEffect(() => {
    if (inputRef.current && caretRef.current && hiddenSpanRef.current) {
      const { selectionStart } = inputRef.current;
      const textBeforeCaret = currentLine.slice(0, selectionStart || 0);
      hiddenSpanRef.current.textContent = textBeforeCaret;
      caretRef.current.style.left = `${hiddenSpanRef.current.offsetWidth}px`; // Adjust to fit input width
    }
  }, [currentLine]);

  const handleFocusInput = () => {
    setFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div
      className="flex flex-col text-black dark:text-white bg-[#afafaf96] dark:bg-[#300924] rounded-md w-full h-full font-mono"
      onFocus={handleFocusInput}
      onBlur={handleBlur}
      tabIndex={1}>
      <div className="flex p-2 dark:bg-gray-700 bg-slate-600 rounded-tl-md rounded-tr-md h-10 items-center">
        <div className="flex space-x-2 items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-center w-full font-bold text-slate-400 dark:text-white">
          [{userName}@{machineName}]$
        </div>
      </div>
      <div className="overflow-y-auto pt-4 px-2">
        <InitialFeed text={initialFeed} />
        {output.map((line, index) => {
          if (index % 2 === 0 && typeof line === "string") {
            const parts = line.split(":");
            return (
              <div className="flex" key={index}>
                <span className="dark:text-green-500 text-green-900">{parts[0]}: </span>
                <span>{parts[1]}</span>
              </div>
            );
          }

          return <div key={index}>{line}</div>;
        })}
        <div className="flex relative">
          <span className="dark:text-green-500 text-green-900">
            {userName}@{machineName}
          </span>
          :<span>~</span>$&nbsp;
          <div className="flex-grow relative">
            <span id="hiddenSpan" className="invisible fixed" ref={hiddenSpanRef} />
            <input
              ref={inputRef}
              className="fixed -z-10 w-0 h-0 opacity-0"
              value={currentLine}
              onKeyDown={handleCommand}
              onChange={() => null}
            />
            <div className="flex">
              <span>{currentLine}</span>
              {focused ? (
                <div
                  ref={caretRef}
                  className="absolute top-0 h-full bg-slate-800 dark:bg-white w-[10px] animate-caret-blink"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
