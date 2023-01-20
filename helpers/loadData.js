import fs from "fs";

const loadData = () => {
  try {
    const data = JSON.parse(fs.readFileSync("./db/.data.json"));
    return data;
  } catch (error) {
    return [];
  }
};

export { loadData };
