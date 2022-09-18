const { mostarMenu, pause } = require("./helpers/mensajes");

require("colors");
console.clear();

const main = async () => {
  console.log("hola mundo.");

  do {
    let option = await mostarMenu();
    if (option != 0) pause();
  } while (option != 0);
};

main();
