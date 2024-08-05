#! /usr/bin/env node

import inquirer from "inquirer";

const quiz: {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
} = await inquirer.prompt([
  {
    name: "question_1",
    type: "list",
    message: "What is TypeScript?",
    choices: [
      "A programming language developed by Microsoft that adds static typing to JavaScript.",
      "A web browser developed by Mozilla.",
      "A JavaScript framework for building user interfaces.",
      "A database management system.",
    ],
  },
  {
    name: "question_2",
    type: "list",
    message:
      "Which of the following is the correct way to define a variable in TypeScript with a specific type?",
    choices: [
      "let name = 'John';",
      "let name: string = 'John';",
      "var name = 'John';",
      "const name = 'John';",
    ],
  },
  {
    name: "question_3",
    type: "list",
    message: "How do you define an interface in TypeScript?",
    choices: [
      "class MyInterface { property: string; }",
      "interface MyInterface { property: string; }",
      "let MyInterface = { property: string; }",
      "function MyInterface(property: string) {}",
    ],
  },
  {
    name: "question_4",
    type: "list",
    message:
      "Which of the following TypeScript features allows you to check the types at compile time?",
    choices: [
      "Type Inference",
      "Type Annotations",
      "Type Aliases",
      "Type Guards",
    ],
  },
  {
    name: "question_5",
    type: "list",
    message: "How do you run a TypeScript file?",
    choices: [
      "Directly in the browser",
      "Using the Node.js runtime with the command `node file.ts`",
      "By compiling it to JavaScript using the TypeScript compiler and then running the JavaScript file",
      "Using the Python interpreter with the command `python file.ts`",
    ],
  },
]);

let score: number = 0;

switch (quiz.question_1) {
  case "A programming language developed by Microsoft that adds static typing to JavaScript.":
    console.log("1. Correct!");
    ++score;
    break;
  default:
    console.log("1. Incorrect");
}

switch (quiz.question_2) {
    case "let name: string = 'John';":
      console.log("2. Correct!");
      ++score;
      break;
    default:
      console.log("2. Incorrect");
  }
  
switch (quiz.question_3) {
    case "interface MyInterface { property: string; }":
      console.log("3. Correct!");
      ++score;
      break;
    default:
      console.log("3. Incorrect");
  }
  
switch (quiz.question_4) {
    case "Type Annotations":
      console.log("4. Correct!");
      ++score;
      break;
    default:
      console.log("4. Incorrect");
  }
  
switch (quiz.question_5) {
    case "By compiling it to JavaScript using the TypeScript compiler and then running the JavaScript file":
      console.log("5. Correct!");
      ++score;
      break;
    default:
      console.log("5. Incorrect");
  }
console.log(`Score: ${score}`);
