import fs from "fs";
import moment from "moment-timezone";

moment.tz.setDefault("Asia/Jakarta").locale("id");

(function () {
  if (!fs.existsSync("log.txt")) {
    fs.writeFileSync("log.txt", "");
  }

  const logText = fs.readFileSync("log.txt")?.toString();
  const date = new Date();
  const newLog =
    moment(date).format("ddd, D MMM YYYY HH:mm:ss") +
    " | " +
    date.toLocaleString("id-ID") +
    "\n" +
    logText;
  fs.writeFileSync("log.txt", newLog);
  console.log(newLog);
})();
