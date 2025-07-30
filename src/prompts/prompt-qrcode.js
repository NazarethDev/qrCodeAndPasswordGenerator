import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para geração do QR Code"),
    },
    {
        name: "type",
        description: chalk.yellow.bold("Escolha entre um tipo de QR Code (1 - normal ou 2 - terminal"),
        pattern: /^[1,2]+$/,
        message: chalk.red.italic("Por favor, selecione entre a opção 1 ou 2 apenas"),
        required: true
    },
];

export default promptQRCode;