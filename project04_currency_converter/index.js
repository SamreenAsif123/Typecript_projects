import inquirer from 'inquirer';
const currency = {
    PKR: 280,
    EUR: 0.91,
    USD: 1,
    GBP: 0.76,
    INR: 74.57
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter your currency',
        type: 'list',
        choices: ['PKR', 'USD', 'EUR', 'GBP', 'INR']
    },
    {
        name: 'to',
        message: 'Enter to currency',
        type: 'list',
        choices: ['PKR', 'USD', 'EUR', 'GBP', 'INR']
    },
    {
        name: 'amount',
        message: 'Enter your amount',
        type: 'number',
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseamount = amount / fromAmount;
let convertedAmount = baseamount * toAmount;
console.log(convertedAmount);
