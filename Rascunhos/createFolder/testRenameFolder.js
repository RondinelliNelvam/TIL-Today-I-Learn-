const fs = require("fs");

const currPath = "./Users";
const newPath = "./Usuarios";

fs.rename(currPath, newPath, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully renamed the directory.");
  }
});
