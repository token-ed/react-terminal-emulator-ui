## React Terminal Emulator UI

### Description

A customizable terminal component for React applications. This component simulates a command-line interface where users can input commands and view the output.

### Installation

You can install the package from npm using the following command:

```bash
npm install terminal
```

### Usage

```jsx
import React from "react";
import { Terminal, Command } from "terminal";

const MyTerminal = () => {
  // Define commands
  const commands: Command[] = [
    {
      command: "help",
      result: "List of available commands: ...",
    },
    // Add more commands as needed
  ];

  return (
    <Terminal
      commands={commands}
      userName="user"
      machineName="machine"
      initialFeed="Welcome to the terminal!"
    />
  );
};

export default MyTerminal;
```

### API

| Name                | Type                      | Default                                                            | Description                                                                                                               |
| ------------------- | ------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `commands`          | `Array<Command>`          | -                                                                  | An array of command objects defining the available commands and their corresponding results or side effects.              |
| `userName`          | `string`                  | -                                                                  | The username to be displayed in the terminal prompt.                                                                      |
| `machineName`       | `string`                  | -                                                                  | The machine name to be displayed in the terminal prompt.                                                                  |
| `initialFeed`       | `string`                  | `"Welcome to your terminal. Type help to see available commands."` | Initial text to be displayed in the terminal.                                                                             |
| `onCommandNotFound` | `(cmd: string) => string` | A function returning `'${cmd}': command not found.`                | A function called when an unknown command is entered. It should return the error message to be displayed in the terminal. |

### License

This package is licensed under the MIT License.

### Author

Eduardo Fernandes

### Support

For any issues or questions, please open an issue on GitHub.
