const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter text for the logo. (Must not be more than 3 characters.)",
  },
  {
    type: "input",
    name: "colour",
    message: "Enter the colour for the text",
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape for the logo",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    name: "colour",
    message: "Enter the colour for shape",
  },
];

module.exports = questions;
