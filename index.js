import { createServer } from "https";

import express from "express";

import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/mssg", function (req, res) {
  console.log(req.body);

  res.redirect("/");
});

const options = {
  key: process.env.SSL_KEY_FILE_NAME,
  cert: process.env.SSL_KEY_FILE_NAME,
};

createServer(options, app).listen(3000, function (req, res) {
  console.log("Server started at port 3000");
});

// await connectToDBPromise()
//   .then(() => {
//     console.log("[connectToDB] Ok");
//   })
//   .catch((err) => {
//     console.error("[connectToDB] Error", err);
//     process.exit();
//   });
