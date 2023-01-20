const questions = [
  {
    type: "list",
    name: "opt",
    message: "Qué desea hacer?",
    choices: [
      { value: "1", name: `${"1.".green} Crear Tarea` },
      { value: "2", name: `${"2.".green} Listar tareas` },
      { value: "3", name: `${"3.".green} Listar tareas completadas` },
      { value: "4", name: `${"4.".green} Listar tareas pendientes` },
      { value: "5", name: `${"5.".green} Completar tarea(s)` },
      { value: "6", name: `${"6.".green} Borrar tarea(s)` },
      { value: 0, name: `${"0.".green} Salir\n` },
    ],
    pageSize: 8,
  },
];

export default questions;
