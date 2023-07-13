const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter text for the logo. (Must not be more than 3 characters.)",
  },
  {
    type: "input",
    name: "text-colour",
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
    name: "logo-colour",
    message: "Enter the colour for logo",
  },
];

module.exports = questions;
