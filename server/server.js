const express = require("express");
const multer = require("multer");
var cors = require("cors");

const app = express();
app.use(cors());
const uploadFolder = "./uploads";

const upload = multer({
  dest: uploadFolder,
});

app.post("/upload", upload.single("profile"), (req, res) => {
  console.log(res.body);
  res.send("Success");
});

// Default
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(1000, () => {
  console.log("Server is running");
});
