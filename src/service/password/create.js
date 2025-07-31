import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
    console.log(chalk.green.bold("Password generated successfully ✅"));
    const password = await handle();
    console.log(chalk.yellowBright.bold(password));
};

export default createPassword;