## React Terminal Emulator UI

### Description

A customizable terminal component for React applications. This component simulates a command-line interface where users can input commands and view the output. Built with React + TypeScript + Tailwind

![demo-gif](https://github.com/token-ed/react-terminal-emulator-ui/assets/149210610/88dc4b11-062f-48d9-8a1f-116b5c93d2ef)

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

### Important Note on Next.js Integration

There is a change you are using Next.js framework to build your project. If that is the case please add this configuration line to your `next.config.mjs` file:

```ts
/** @type {import('next').NextConfig} */
const nextConfig = { transpilePackages: ["react-terminal-emulator-ui"] }; // add this line

export default nextConfig;
```

This will ensure Next.js transpiles and bundles dependencies from this package into your project out of the box.

For more information refer to: https://nextjs.org/docs/app/api-reference/next-config-js/transpilePackages

### `Important Note on TailwindCSS Integration`

As of the date of publishing this package, TailwindCSS does not support native package resolution for styles. This means that any custom styling provided by this package using TailwindCSS will not automatically be included in your project. To ensure that the TailwindCSS styles from this package are applied correctly, you need to update your TailwindCSS configuration in your project.

Please follow these steps (assuming you've already installed TailwindCSS and created a configuration file):

1. **Update your tailwind.config.js file** to include the paths to the components of this package:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ...
    "./node_modules/react-terminal-emulator-ui/**/*.{js,ts,jsx,tsx}", // Add this line,
    ...
  ],
};
```

For more information refer to: https://tailwindcss.com/docs/content-configuration#working-with-third-party-libraries

### API

| Name                  | Type                      | Default                                                            | Description                                                                                                               |
| --------------------- | ------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `commands`            | `Array<Command>`          | -                                                                  | An array of command objects defining the available commands and their corresponding results or side effects.              |
| `userName`            | `string`                  | -                                                                  | The username to be displayed in the terminal prompt.                                                                      |
| `machineName`         | `string`                  | -                                                                  | The machine name to be displayed in the terminal prompt.                                                                  |
| `initialFeed`         | `string`                  | `"Welcome to your terminal. Type help to see available commands."` | Initial text to be displayed in the terminal.                                                                             |
| `onCommandNotFound`   | `(cmd: string) => string` | A function returning `'${cmd}': command not found.`                | A function called when an unknown command is entered. It should return the error message to be displayed in the terminal. |
| `disableClearCommand` | `boolean`                 | `false`                                                            | Boolean flag to disable native `clear` command (clears the terminal)                                                      |

### `Note on Height`

The main element of the terminal component uses the `h-full` TailwindCSS class. This means that if you want to restrict the height of the terminal, you need to wrap the component in a `<div>` or any other element and apply a custom height. For example, to use the full page height, you can use the h-screen class, or for a custom height, you can use something like `h-96`.

#### Example with `h-screen`:

```jsx
<div className="h-screen">
  <Terminal commands={commands} machineName="machine-name" userName="user-name" />
</div>
```

#### Example with `h-96`:

```jsx
// your parent element with `h-96`
<div className="h-96">
  <Terminal commands={commands} machineName="machine-name" userName="user-name" />
</div>
```

### License

This package is licensed under the MIT License.

### Author

- [Eduardo Fernandes](https://github.com/token-ed)

### Support

For any issues or questions, please open an issue on GitHub.

#### Upcoming features

- Enable arrow navigation
- Styling wrapper classes with Tailwind + Styling for the rest of the bits (prompt parts - user name, machine name etc, tilde etc)
- Resizing/Size props
