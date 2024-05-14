import fs from "fs";

(function () {
  if (!fs.existsSync("log.txt")) {
    fs.writeFileSync("log.txt", "");
  }

  const logText = fs.readFileSync("log.txt")?.toString();
  const newLog = new Date().toLocaleString("id-ID") + "\n" + logText;
  fs.writeFileSync("log.txt", newLog);
  console.log(newLog);
})();
