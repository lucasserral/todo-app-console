const { resolve } = require("path");

require("colors");

const mostarMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear();
    console.log("============".green);
    console.log("elija opcion".green);
    console.log("============\n".green);

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea(s)`);
    console.log(`${"0.".green} Salir \n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let option;

    readLine.question("Seleccione una opcion ", (opt) => {
      console.log({ opt });
      readLine.close();
      resolve(opt);
    });

    return option;
  });
};

const pause = () => {
  return new Promise((resolve, reject) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(
      `Presione ${"ENTER".green} para continuar...\n`,
      (evt) => {
        readLine.close();
        evt == "" ? resolve("") : pause();
      }
    );
  });
};
module.exports = {
  mostarMenu,
  pause,
};
