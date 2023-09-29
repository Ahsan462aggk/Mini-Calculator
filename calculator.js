import inquirer from "inquirer";
async function calculator() {
    const result = await inquirer.prompt([{
            type: "number",
            message: "enter the number",
            name: "num1"
        },
        {
            type: "number",
            message: "Enter second number",
            name: "num2"
        },
        {
            name: "opreation",
            choices: ["Sum", "Subtraction", "Multiplication", "Division", "Modulus", "Exponent"],
            type: "list"
        }]);
    switch (result.opreation) {
        case "Sum":
            console.log(`${result.num1}+${result.num2}=${result.num1 + result.num2}`);
            break;
        case "Multiplication":
            console.log(`${result.num1}*${result.num2}=${result.num1 * result.num2}`);
            break;
        case "Division":
            console.log(`${result.num1}/${result.num2}=${result.num1 / result.num2}`);
            break;
        case "Subtraction":
            console.log(`${result.num1}-${result.num2}=${result.num1 - result.num2}`);
            break;
        case "Exponent":
            console.log(`${result.num1}**${result.num2}=${Math.pow(result.num1, result.num2)}`);
            break;
        case "Modulus":
            console.log(`${result.num1}%${result.num2}=${result.num1 % result.num2}`);
        default:
            console.log("invalid choice");
            break;
    }
}
calculator();
