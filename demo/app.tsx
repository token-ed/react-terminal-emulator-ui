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
      <div>
        <p>Available commands:</p>
        <ul>
          <li>
            <b>help</b> - List of available commands
          </li>
          <li>
            <b>bio</b> - Display bio details about the user
          </li>
        </ul>
      </div>
    ),
  },
  {
    command: "bio",
    result: (
      <div>
        <p>
          👋 Hello! I'm user-name, a passionate developer with a love for coding and technology.
        </p>
        <ul>
          <li>💻 Full-Stack Developer</li>
          <li>📚 Avid Learner</li>
          <li>🎨 Creative Problem Solver</li>
          <li>🌐 Open Source Contributor</li>
        </ul>
        <p>Let's build something amazing together!</p>
      </div>
    ),
  },
];

const AppDesktop = () => (
  <Terminal commands={commands} machineName="machine-name" userName="user-name" />
);
