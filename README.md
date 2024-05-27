## React Terminal Emulator UI

### Description

A customizable terminal component for React applications. This component simulates a command-line interface where users can input commands and view the output. Built with React + TypeScript + Tailwind

![gif](https://github.com/token-ed/react-terminal-emulator-ui/assets/149210610/7d05f95d-090d-4b69-a43a-a58410e4c6bc)

### Live example

- [React Terminal Emulator UI](https://token-ed.github.io/react-terminal-emulator-ui/)

### Installation

You can install the package from npm using the following command:

```bash
npm i react-terminal-emulator-ui
```

### Usage

```jsx
import React from "react";
import { Terminal, Command } from "terminal";

const MyTerminal = () => {
  // Define commands
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

  return (
    <Terminal
      commands={commands}
      userName="user-name"
      machineName="machine-name"
      initialFeed="Welcome to your terminal. Type help to see available commands."
    />
  );
};

export default MyTerminal;
```

### API

| Name                  | Type                      | Default                                                            | Description                                                                                                               |
| --------------------- | ------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `commands`            | `Array<Command>`          | -                                                                  | An array of command objects defining the available commands and their corresponding results or side effects.              |
| `userName`            | `string`                  | -                                                                  | The username to be displayed in the terminal prompt.                                                                      |
| `machineName`         | `string`                  | -                                                                  | The machine name to be displayed in the terminal prompt.                                                                  |
| `initialFeed`         | `string`                  | `"Welcome to your terminal. Type help to see available commands."` | Initial text to be displayed in the terminal.                                                                             |
| `onCommandNotFound`   | `(cmd: string) => string` | A function returning `'${cmd}': command not found.`                | A function called when an unknown command is entered. It should return the error message to be displayed in the terminal. |
| `disableClearCommand` | `boolean`                 | `false`                                                            | Boolean flag to disable native `clear` command (clears the terminal)                                                      |

### License

This package is licensed under the MIT License.

### Author

- [Eduardo Fernandes](https://github.com/token-ed)

### Support

For any issues or questions, please open an issue on GitHub.

#### Upcoming features

- Enable arrow navigation
- Styling wrapper classes with Tailwind
- Resizing/Size props
