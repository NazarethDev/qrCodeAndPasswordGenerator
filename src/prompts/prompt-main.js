import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.green.bold("escolha a ferramenta: (1 - QR CODE ou 2- PASSWORDS)"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 e 2"),
        required: true,
    }
]

export default mainPrompt;