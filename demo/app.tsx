import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Command, Terminal } from "../src/index";

export const App = () => {
  return (
    <BrowserRouter basename="react-terminal-emulator-ui">
      <AppDesktop />
    </BrowserRouter>
  );
};

const commands: Array<Command> = [
  {
    command: "help",
    result: (
      <>
        <b>ewgewg</b>
        <div className="bg-slate-500 ">ewgweg</div>
        <button>wege</button>
      </>
    ),
    sideEffect: () => alert("wow"),
  },
];

const AppDesktop = () => <Terminal commands={commands} machineName="randomMachine" userName="Ed" />;
