import "colors";
import { pause, inquirerMenu } from "./helpers/mensajes.js";
import { persistirData } from "./helpers/persistirData.js";
import Tareas from "./models/tareas.js";
import * as console from "console";
import { loadData } from "./helpers/loadData.js";

console.clear();

const main = async () => {
  console.clear();
  const tareas = new Tareas(loadData());

  let option;
  do {
    option = await inquirerMenu();

    switch (option) {
      case "1":
        await tareas.addTask();
        break;
      case "2":
        console.log(tareas.getList());
        await pause();
        break;

      default:
        break;
    }

    persistirData(tareas.getList({ type: "raw" }));

    // if (option != 0) ;
  } while (option != 0);
};

main();
