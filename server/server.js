const express = require("express");
const multer = require("multer");
var cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(cors());
const UPLOAD_FOLDER = "./uploads";

// CUSTOM MIDDLEWARE FOR RENAME FILES
function renameFile(req, res, next) {
  const fileExt = path.extname(req.file.originalname);
  const newPath = `${__dirname}/${req.file.destination}/${
    req.body.id
  }_${Date.now()}${fileExt}`;

  // RENAME HERE
  fs.renameSync(req.file.path, newPath);
  const newFilename = path.basename(newPath);

  // ASSIGN NEW NAME AND PATH
  req.file.path = newPath;
  req.file.oldFilename = req.file.filename;
  req.file.filename = newFilename;
  console.log(req.file);
  next();
}

const upload = multer({
  // dest: UPLOAD_FOLDER,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOAD_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const filename =
        file.originalname
          .replace(fileExt, "")
          .replace(" ", "_")
          .toLocaleLowerCase() +
        "-" +
        Date.now() +
        fileExt;

      cb(null, filename);
    },
  }),
});

app.post("/upload", upload.single("profile"), renameFile, (req, res) => {
  res.send("Success");
});

// Default
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(1000, () => {
  console.log("Server is running");
});
