import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow.bold("Enter the link to generate the QR Code"),
    },
    {
        name: "type",
        description: chalk.yellow.bold.bold("Choose between a QR Code type (1 - normal or 2 - terminal)"),
        pattern: /^[1,2]+$/,
        message: chalk.red.bold("Please select between option 1 or 2 only"),
        required: true
    },
];

export default promptQRCode;