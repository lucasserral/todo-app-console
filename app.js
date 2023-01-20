import "colors";
import { pause, inquirerMenu } from "./helpers/mensajes.js";
import Tareas from "./models/tareas.js";

console.clear();

const main = async () => {
  console.log("hola mundo.");
  const tareas = new Tareas();

  let option;
  do {
    option = await inquirerMenu();

    switch (option) {
      case "1":
        await tareas.addTask();
        break;
      case "2":
        console.log(tareas.getList());
        break;

      default:
        break;
    }

    // if (option != 0) await pause();
  } while (option != 0);
};

main();
