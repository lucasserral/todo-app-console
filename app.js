import "colors";
import { pause, inquirerMenu } from "./helpers/mensajes.js";

console.clear();

const tareas = [];

const main = async () => {
  console.log("hola mundo.");

  let option;
  do {
    option = await inquirerMenu();
    console.log(option);
    if (option != 0) await pause();
  } while (option != 0);
};

main();
