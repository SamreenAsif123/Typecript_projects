#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 20000;
let pinCode = 3212;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin code:",
    type: "number",
  },
]);

if (pinAnswer.pin === pinCode) {
  console.log("Correct pin code");

  let operationAnswer = await inquirer.prompt([
    {
      name: "operations",
      message: "Please select option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);

  if (operationAnswer.operations === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount:",
        type: "number",
      },
    ]);

    if (amountAns.amount > myBalance) {
      console.log("Insufficient balance");
    } else {
      myBalance -= amountAns.amount;
      console.log(`Your remaining balance is ${myBalance}`);
    }
  } else if (operationAnswer.operations === "check balance") {
    console.log(`Your balance is ${myBalance}`);
  }
} else {
  console.log("Incorrect pin code");
}
