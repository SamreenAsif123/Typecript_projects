#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.rgb(43, 26, 153)("\n \t TodoList Application\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            type: "input",
            name: "task",
            message: chalk.rgb(168, 8, 134)("Enter your task : "),
        },
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in todo list successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            type: "confirm",
            name: "addMore",
            message: chalk.rgb(168, 8, 134)("Do you want to add more tasks to this list?"),
            default: false,
        },
    ]);
    conditions = addMoreTask.addMore;
}
console.log(chalk.rgb(11, 156, 148)(`your list of tasks has been added: { ${chalk.rgb(8, 207, 64)(todoList)} }`));
