const { Worker } = require("node:worker_threads");

const worker = new Worker("./worker.js");
worker.on("message", (data) => {
  console.log(data + " has been received from worker thread.");
});
// worker
// let total = 0;
// for (let i = 0; i < 10000000000; i++) {
//   total += i;
// }
// console.log("🚀 ~ total:", total);

console.log("NODE.js");
console.log("Express.js");
console.log("MongoDB");
console.log("React.js");
