const fs = require("fs");

function renameFile(req, res, next) {
  //   fs.renameSync(
  //     req.file.path,
  //     __dirname + "../" + req.file.destination + "/" + req.body.id + ".jpg"
  //   );

  let newFile =
    __dirname + "/" + req.file.destination + "/" + req.body.id + ".jpg";

  console.log(req.file);
  console.log(newFile);
  //   req.file.path = newFile;
  console.log(req.file);
  next();
}

module.exports = { renameFile };
