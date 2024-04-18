#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please Guess a number between 1 to 6",
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulation! you guessed right number");
}
else {
    console.log("You guessed wrong number");
}
