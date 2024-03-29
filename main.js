#! /usr/bin/env node
import inquirer from "inquirer";
let taskList = [];
let condition = true;
while (condition) {
    let todoRegistry = await inquirer.prompt([
        {
            name: "taskName",
            message: "Please enter the task",
            type: "input"
        },
        {
            name: "description",
            type: "input",
            message: "Please enter a description for the task (optional)"
        },
        {
            name: "priority",
            type: "list",
            message: "Please select the priority level for the task (optional)",
            choices: ["High", "Medium", "Low", "None"]
        },
        {
            name: "addMore",
            message: "You can also add more, so do you want to add more?",
            type: "confirm",
            default: false
        }
    ]);
    let priority = todoRegistry.priority;
    if (priority === "None") {
        priority = "Not Specified";
    }
    taskList.push({
        name: todoRegistry.taskName,
        description: todoRegistry.description || "No description provided",
        priority: priority
    });
    condition = todoRegistry.addMore;
    if (!condition) {
        console.log("Task List is Completed!");
    }
}
console.log("Final task list:", taskList);
