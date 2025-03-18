import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

var __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
app.use(morgan("combined"));
app.use(bodyParser.urlencoded( { extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Public/index.html");
});
app.get("/styles.css", (req, res) => {
  res.sendFile(__dirname + "/Public/styles.css");
});



app.listen(port, () => {
  console.log(`Server is runnin of Port: ${port}`);
});
app.post("/login", (req, res) => {
  console.log(req.body);
  res.sendFile(__dirname + "/Public/success.html");
});
// app.get("/login", (req, res) => {
//   res.sendFile(__dirname + "/Public/success.html");
// });
// app.post("/submit", (req, res) => {
//   console.log(req.body);
// })
