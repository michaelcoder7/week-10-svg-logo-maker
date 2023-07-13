const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { Circle, Triangle, Square } = require("./shapes");
const questions = require(".questions");
const { LogoText, SVG } = require("./Svg");

class CLI {
  constructor() {}
  run() {
    return inquirer
      .prompt(questions)
      .then((responses) => {
        const svg = this.generateSVG(responses);

        const markup = svg.render();

        return writeFile("logo.svg", markup);
      })

      .then(() => {
        // sort by priority so that priority tasks come before non-priority tasks
        this.tasks.sort((a, b) =>
          a.priority === b.priority ? 0 : a.priority && !b.priority ? -1 : 1
        );
        return writeFile(
          join(__dirname, "..", "output", "tasks.html"),
          createDocument(this.title, this.tasks)
        );
      })
      .then(() => console.log("Created tasks.html"))
      .catch((err) => {
        console.log(err);
        console.log("Oops. Something went wrong.");
      });
  }

  addTask() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message: "Enter task",
        },
        {
          type: "confirm",
          name: "priority",
          message: "Is this a priority task?",
        },
        {
          type: "confirm",
          name: "confirmAddTask",
          message: "Would you like to add another task?",
        },
      ])
      .then(({ text, priority, confirmAddTask }) => {
        this.tasks.push({ text, priority });
        if (confirmAddTask) {
          return this.addTask();
        }
      });
  }
}

module.exports = CLI;