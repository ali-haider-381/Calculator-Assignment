import inquirer from 'inquirer';
const questions = [{
        name: 'num1',
        type: 'number',
        messege: 'Enter Number',
    },
    {
        name: 'num2',
        type: 'number',
        messege: 'Enter Name',
    },
    {
        name: 'operations',
        type: 'list',
        messege: 'your number',
        choices: ["+", "-", "*", "/", "%",]
    },
];
var answers = inquirer.prompt(questions);
answers.then((answers) => {
    switch (answers.operations) {
        case "+":
            console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
            break;
        case "-":
            console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
            break;
        case "*":
            console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
            break;
        case "/":
            console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
            break;
        case "%":
            console.log(`${answers.num1} % ${answers.num2} = ${answers.num1 % answers.num2}`);
            break;
        default:
            break;
    }
})
    .catch((err) => {
    console.log("err", err);
});
console.log("your Question");