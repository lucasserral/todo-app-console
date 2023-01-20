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

  getList() {
    const keys = Object.keys(this.#list);
    let str = "";
    keys.forEach((key) => {
      str += ` - ${this.#list[key].desc}\n`;
    });
    return str;
  }
}

export default Tareas;
