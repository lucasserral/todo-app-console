import inquirer from "inquirer";
import "colors";
import questions from "../lists/questions.js";

const pause = async () => {
  await inquirer.prompt([
    {
      name: "pause",
      type: "input",
      message: "Presione 'ENTER' para continuar",
    },
  ]);
  return;
};

const inquirerMenu = async () => {
  console.clear();

  const { opt } = await inquirer.prompt(questions);
  return opt;
};

export { pause, inquirerMenu };
