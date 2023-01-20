import inquirer from "inquirer";
import Tarea from "./tarea.js";

class Tareas {
  #list;
  constructor() {
    this.#list = {};
  }

  async addTask() {
    const desc = await inquirer.prompt({
      name: "newTaskDesc",
      type: "input",
      message: "Escriba la descripción de su tarea: ",
      validate(val) {
        if (val.length === 0) {
          return "Por favor, ingrese un valor";
        }
        return true;
      },
    });

    const task = new Tarea({ desc: desc.newTaskDesc });

    this.#list[task.id] = task;
  }

  getList(config = { type: "string" }) {
    const keys = Object.keys(this.#list);
    if (config.type === "raw") {
      const arr = [];
      keys.forEach((key) => {
        arr.push(this.#list[key]);
      });
      return JSON.stringify(arr);
    }
    let str = "";
    keys.forEach((key) => {
      str += ` - ${this.#list[key].desc}\n`;
    });
    return str;
  }
}

export default Tareas;
