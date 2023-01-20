import inquirer from "inquirer";
import Tarea from "./tarea.js";

class Tareas {
  #list;
  constructor(initialDataArray) {
    const newData = {};
    initialDataArray.forEach((element) => {
      newData[element.id] = element;
    });
    this.#list = newData;
  }

  listPending() {
    const keys = Object.keys(this.#list);
    let str = "";
    keys.forEach((key) => {
      if (!this.#list[key].completadoEn) {
        str += ` - ${this.#list[key].desc}\n`;
      }
    });
    return str;
  }

  listCompleted() {
    const keys = Object.keys(this.#list);
    let str = "";
    keys.forEach((key) => {
      if (!!this.#list[key].completadoEn) {
        str += ` ${"[✓]".green} ${this.#list[key].desc}\n`;
      }
    });
    return str;
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
    keys.forEach((key, i) => {
      if (!!this.#list[key].completadoEn) {
        str += `${i + 1}. ${"[✓]".green} ${this.#list[key].desc} - ${
          "completada".green
        }\n`;
      } else {
        str += `${i + 1}. [ ] ${this.#list[key].desc} - ${"pendiente".red}\n`;
      }
    });
    return str;
  }
}

export default Tareas;
