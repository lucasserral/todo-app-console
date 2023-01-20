import fs from "fs";

const persistirData = (data) => {
  const path = "./db/.data.json";

  fs.writeFileSync(path, data);
};

export { persistirData };
