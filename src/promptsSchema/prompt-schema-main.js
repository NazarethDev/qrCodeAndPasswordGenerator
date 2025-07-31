import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.blue.bold("Choose the tool: (1 - QR Code Generator or 2- Random Password Generator)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("Choose only between 1 and 2"),
        required: true,
    },
];

export default mainPrompt;